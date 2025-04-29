const { catchAsyncError } = require("../middlewares/CatchAsyncError.js");

const { sendtoken } = require("../utils/SendToken");
const ClientModel = require("../models/ClientModel");
const Errorhandler = require("../utils/Errorhandler");
const Project = require("../models/Project");
const Client = require("../models/ClientModel");
const ProposalModel = require("../models/ProposalModel");
const Freelancer = require("../models/FreelancerModel");
const Proposal = require("../models/ProposalModel");
const VirtualSpaceModel = require("../models/VirtualSpaceModel.js");
const path = require("path");
const imagekit = require("../utils/imagekit").initImagekit();

exports.home = catchAsyncError(async (req, res) => {
  res.json({ message: "Secure homepage" });
});
exports.loggedin = catchAsyncError(async (req, res) => {
  const client = await Client.findById(req.user.id).exec();
  res.status(200).json({
    role: "client",
    client,
  });
  // sendtoken(client, 200, res,"client");
  console.log(client + "client");
});

exports.register = catchAsyncError(async (req, res, next) => {
  try {
    const client = await new ClientModel(req.body).save();
    sendtoken(client, 200, res, "client");
    console.log(client);
  } catch (error) {
    next(error);
  }
});

exports.login = catchAsyncError(async (req, res, next) => {
  const client = await ClientModel.findOne({ email: req.body.email })
    .select("+password")
    .exec();
  if (!client) {
    return next(new Errorhandler("User not found", 404));
  }
  const isMatch = await client.comparepassword(req.body.password);
  if (!isMatch) {
    return next(new Errorhandler("Invalid credentials", 401));
  }
  sendtoken(client, 200, res, "client");
});

exports.signout = catchAsyncError(async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Signed out successfully" });
});

exports.projects = catchAsyncError(async (req, res, next) => {
  try {
    const project = await Project.find({});
    // sendtoken(product, 200, res);
    res.status(200).json({ project });
  } catch (error) {
    next(error);
  }
});

exports.myprojects = catchAsyncError(async (req, res, next) => {
  try {
    // Fetch the client and populate their projects field
    const client = await ClientModel.findById(req.user.id)
      .populate("projects")
      .exec();

    if (!client) {
      return next(new Errorhandler("Client not found", 404));
    }

    res.status(200).json({
      message: "Fetched client projects successfully",
      projects: client.projects, // Return only the populated projects
    });
  } catch (error) {
    next(error);
  }
});

exports.Profile = catchAsyncError(async (req, res, next) => {
  try {
    const Client = await ClientModel.findById(req.user.id).exec();

    res.status(200).json({ Client });

    console.log(Client);
  } catch (error) {
    next(error);
  }
});

exports.editProfile = catchAsyncError(async (req, res, next) => {
  try {
    const { langauge, ...otherFields } = req.body;
    // console.log(req.body.language);

    // Ensure skills and langauge are arrays
    // const parsedSkills = skills ? JSON.parse(skills) : [];

    const parsedLangauge = req.body.language
      ? JSON?.parse(req.body.language)
      : [];

    const updatedProfile = await ClientModel.findByIdAndUpdate(
      req.user.id,
      {
        ...otherFields,
        // skills: parsedSkills,
        langauge: parsedLangauge,
      },
      { new: true }
    );

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.Ongoingprojets = catchAsyncError(async (req, res, next) => {
  try {
    // Fetch the freelancer and populate their projects
    const freelancer = await FreelancerModel.findById(req.user.id).populate({
      path: "projects", // Assuming `projects` is the field in FreelancerModel
      populate: [
        { path: "client" }, // Populate the `client` field in each project
        { path: "freelancer" }, // Populate the `freelancer` field in each project
      ],
    });

    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }

    // Extract and log all projects for debugging
    const projects = freelancer.projects;
    console.log("Projects:", projects);

    // Respond with all populated projects
    res.status(200).json({ projects });
  } catch (error) {
    console.error("Error fetching freelancer projects:", error);
    next(error); // Pass the error to the error handling middleware
  }
});

exports.deleteAccount = catchAsyncError(async (req, res, next) => {
  try {
    const Client = await ClientModel.findOneAndDelete(req.id).exec();
    sendtoken(Client, 200, res);
  } catch (error) {
    next(error);
  }
});

exports.CreateProject = catchAsyncError(async (req, res, next) => {
  try {
    // Step 1: Create the new project
    const project = await new Project(req.body).save();

    // Step 2: Update the client's projects array
    await Client.findByIdAndUpdate(
      req.user.id, // Assuming req.user.id contains the ID of the logged-in client
      { $push: { projects: project._id } }, // Push the project's ID into the client's projects array
      { new: true } // Return the updated client document
    ).exec();

    // Step 3: Send a response with the created project
    res.status(201).json({
      message: "Project created successfully and linked to the client",
      project,
    });
  } catch (error) {
    next(error);
  }
});

exports.editProfile = catchAsyncError(async (req, res, next) => {
  try {
    // Update the freelancer with the provided fields in req.body
    const client = await Client.findByIdAndUpdate(
      req.id,
      { $set: req.body } // Use $set to update only specified fields
    ).exec();
    //save user and then  render

    if (!client) {
      return next(new Errorhandler("client not found", 404));
    }

    res.status(200).json({ message: "Profile updated successfully", client });
  } catch (error) {
    next(error);
  }
});

exports.notification = catchAsyncError(async (req, res, next) => {});
exports.payment = catchAsyncError(async (req, res, next) => {});
exports.Virtualspace = catchAsyncError(async (req, res, next) => {});
exports.freelancer = catchAsyncError(async (req, res, next) => {
  try {
    const freelancers = await Freelancer.find({});
    res.status(200).json({ freelancers });
  } catch (error) {
    next(error);
  }
});

exports.Showproposal = catchAsyncError(async (req, res, next) => {
  try {
    // Extract the projectId from the route parameters
    const projectId = req.params.id;

    // Ensure that projectId is provided
    if (!projectId) {
      return next(new Errorhandler("Project ID is required", 400));
    }

    const proposals = await ProposalModel.find({ projectid: projectId }).exec();

    // If no proposals found for the project
    if (!proposals || proposals.length === 0) {
      return next(new Errorhandler("No proposals found for this project", 404));
    }
    res.status(200).json({
      message: "Proposals fetched successfully",
      proposals,
    });
  } catch (error) {
    next(error);
  }
});

exports.acceptproposal = catchAsyncError(async (req, res, next) => {
  try {
    const { proposalid, email } = req.body;
    const { id: projectId } = req.params;

    // Fetch necessary entities
    const [proposal, client, freelancer, project] = await Promise.all([
      Proposal.findById(proposalid),
      ClientModel.findById(req.user.id),
      Freelancer.findOne({ email }),
      Project.findById(projectId),
    ]);

    // Validate fetched entities
    if (!proposal || !client || !freelancer || !project) {
      return next(
        new Errorhandler(
          "Proposal, client, freelancer, or project not found",
          404
        )
      );
    }

    // Assign freelancer and client to the project
    project.client = client._id;
    project.freelancer = freelancer._id;
    project.Freelancerbudget = proposal.budget;
    freelancer.projects.push(project);

    // Update project status and save
    if (client && freelancer) {
      project.status = "in progress";
      proposal.proposal = "accept";
    }
    const virtualSpace = new VirtualSpaceModel({
      workspaceName: project.title, // Set workspace name to project name
      project: project._id,
      client: client._id, // Link the VirtualSpace to the project
      Freelancer: freelancer._id,
    });

    project.workspace = virtualSpace._id;

    await virtualSpace.save();
    await project.save();
    await proposal.save();
    await freelancer.save();
    // Delete other proposals
    await Proposal.deleteMany({ proposal: "pending" });

    // Populate fields for response
    const populatedProject = await Project.findById(project._id)
      .populate("client")
      .populate("freelancer");

    await populatedProject.save();
    // Send response
    res.status(200).json({
      message: "Project signed successfully",
      populatedProject,
    });
  } catch (error) {
    next(error);
  }
});

exports.allprojects = catchAsyncError(async (req, res, next) => {
  try {
    const data = await Project.find().populate({
      path: "client",
      path: "freelancer",
    });
    res.status(200).json({
      data
    })
  } catch (error) {
    res.json({
      error
    })
  }
});

// exports.acceptproposal = catchAsyncError(async (req, res, next) => {
//   try {

//     const proposal = await Proposal.findById(req.body.proposalid)
//     const client = await ClientModel.findById(req.user.id).exec();

//  const freelancer = await Freelancer.findOne({email:req.body.email})

//  const project = await Project.findById(req.params.id)

// project.client =client._id
// project.freelancer=freelancer._id
// project.Freelancerbudget = proposal.budget;
// project.status="in progress"
// await project.save()

// // const result = await Proposal.deleteMany({
// //   projectid: project._id,
// //   _id: { $ne: req.body.proposalid }
// // });
// console.log(Updateproposal+"P");

// // Populate the client and freelancer fields and return the project in the response
// const populatedProject = await Project.findById(project._id)
// .populate('client')  // Populate the client field
// .populate('freelancer')  // Populate the freelancer field
// .exec();

// // if(populatedProject.client &&populatedProject.freelancer){
// //    project.status="in progress"
// // await project.save()

// // }

// console.log(populatedProject);

// // Send the populated project data in the response
// res.status(200).json({
// message: "project signed",
// data: populatedProject,
// });

//   } catch (error) {

//     next(error);
//   }
// })

// exports.acceptproposal = catchAsyncError(async (req, res, next) => {
//   try {

//     const proposal = await Proposal.findById(req.body.proposalid)
//     const client = await ClientModel.findById(req.user.id).exec();
//  const freelancer = await Freelancer.findOne({email:req.body.email})

//  const project = await Project.findById(req.params.id)
//  project.status="in progress"
// project.client =client._id
// project.freelancer=freelancer._id
// project.Freelancerbudget = proposal.budget;
// await project.save()
// const Updateproposal =await Proposal.deleteMany({projectid:project._id})
// console.log(Updateproposal+"P");
// // Populate the client and freelancer fields and return the project in the response
// const populatedProject = await Project.findById(project._id)
// .populate('client')  // Populate the client field
// .populate('freelancer')  // Populate the freelancer field
// .exec();
// console.log(populatedProject);
// // Send the populated project data in the response
// res.status(200).json({
// message: "project signed",
// data: populatedProject,
// });

//   } catch (error) {

//     next(error);
//   }
// })
