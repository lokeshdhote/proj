const { catchAsyncError } = require("../middlewares/CatchAsyncError.js");
const imagekit = require("../utils/imagekit").initImagekit();
const { sendtoken } = require("../utils/SendToken");
const FreelancerModel = require("../models/FreelancerModel");
const ErrorHandler = require("../utils/Errorhandler");
const Freelancer = require("../models/FreelancerModel");
const ProposalModel = require("../models/ProposalModel");
const Project = require("../models/Project");
const path = require("path");
exports.home = catchAsyncError(async (req, res) => {
  res.json({ message: "Secure homepage" });
});

exports.register = catchAsyncError(async (req, res, next) => {
  try {
    console.log(req.body);

    const freelancer = await new FreelancerModel(req.body).save();
    sendtoken(freelancer, 200, res, "freelancer");
    // console.log(freelancer);
  } catch (error) {
    next(error);
  }
});

exports.loggedin = catchAsyncError(async (req, res) => {
  const freelancer = await FreelancerModel.findById(req.user.id).exec();
  // console.log(freelancer);
  res.status(200).json({ freelancer, role: "freelancer" });

  // if(!freelancer){

  // }
  // sendtoken(freelancer, 200, res,"freelancer");
  //  console.log(freelancer+"freelancer");
});

exports.login = catchAsyncError(async (req, res, next) => {
  const freelancer = await FreelancerModel.findOne({ email: req.body.email })
    .select("+password")
    .exec();

  if (!freelancer) {
    return next(new ErrorHandler("User with this email not found", 404));
  }

  const isMatch = await freelancer.comparepassword(req.body.password);

  if (!isMatch) {
    return next(new ErrorHandler("Wrong credentials", 401));
  }

  sendtoken(freelancer, 200, res, "freelancer");
});

exports.signout = catchAsyncError(async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Signed out successfully" });
});

exports.deleteAccount = catchAsyncError(async (req, res, next) => {
  try {
    const freelancer = await FreelancerModel.findOneAndDelete(req.id).exec();
    sendtoken(freelancer, 200, res);
  } catch (error) {
    next(error);
  }
});
exports.sendproposal = catchAsyncError(async (req, res, next) => {
  try {
    console.log("Request body:", req.body);
    const proposal = await new ProposalModel(req.body).save();
    // console.log("Saved proposal:", proposal);
    res.status(200).json({ proposal });
  } catch (error) {
    console.error("Error saving proposal:", error);
    next(error); // Pass the error to the error-handling middleware
  }
});

exports.projectid = catchAsyncError(async (req, res, next) => {
  try {
    // Extract the ID from the request parameters
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    // console.log(project);
    res.status(200).json({ project });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

exports.Showproposal = catchAsyncError(async (req, res, next) => {
  try {
    // Extract the projectId from the route parameters
    const projectId = req.params.id;

    // Ensure that projectId is provided
    if (!projectId) {
      return next(new ErrorHandler("Project ID is required", 400));
    }

    const proposals = await ProposalModel.find({ projectid: projectId }).exec();

    // If no proposals found for the project
    if (!proposals || proposals.length === 0) {
      return next(new ErrorHandler("No proposals found for this project", 404));
    }
    res.status(200).json({
      message: "Proposals fetched successfully",
      proposals,
    });
    console.log(proposals);
  } catch (error) {
    next(error);
  }
});

exports.projects = catchAsyncError(async (req, res, next) => {
  try {
    const project = await Project.find({});

    res.status(200).json({ project });
  } catch (error) {
    next(error);
  }
});

exports.Profile = catchAsyncError(async (req, res, next) => {
  try {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    // console.log(freelancer,"f");

    res.status(200).json({ freelancer });
  } catch (error) {
    next(error);
  }
});
exports.editProfile = async (req, res) => {
  try {
    const { skills, langauge, ...otherFields } = req.body;
    console.log(req.body.language);

    // Ensure skills and langauge are arrays
    const parsedSkills = skills ? JSON.parse(skills) : [];

    const parsedLangauge = req.body.language
      ? JSON?.parse(req.body.language)
      : [];

    const updatedProfile = await Freelancer.findByIdAndUpdate(
      req.user.id,
      {
        ...otherFields,
        skills: parsedSkills,
        langauge: parsedLangauge,
      },
      { new: true }
    );

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
    const data = freelancer.projects;

    // Respond with all populated projects
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching freelancer projects:", error);
    next(error); // Pass the error to the error handling middleware
  }
});

exports.createwallet = catchAsyncError(async (req, res, next) => {
  const {
    accountHolderName,
    bankName,
    accountNumber,
    ifscCode,
    upiId,
    UPIphoneNumber,
  } = req.body;

  try {
    const freelancer = await Freelancer.findById(req.user.id);
    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }
    freelancer.wallet = {
      accountHolderName:
        accountHolderName || freelancer.wallet.accountHolderName,
      bankName: bankName || freelancer.wallet.bankName,
      accountNumber: accountNumber || freelancer.wallet.accountNumber,
      ifscCode: ifscCode || freelancer.wallet.ifscCode,
      upiId: upiId || freelancer.wallet.upiId,
      UPIphoneNumber: UPIphoneNumber || freelancer.wallet.UPIphoneNumber,
    };

    await freelancer.save();
    res.status(200).json({ message: "Wallet updated successfully" });
  } catch (error) {
    next(error);
  }
});
exports.wallet = catchAsyncError(async (req, res, next) => {
  try {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }

    res.status(200).json({ freelancer });
  } catch (error) {
    next(error);
  }
});

// exports.Ongoingprojetsid = catchAsyncError(async (req, res, next) => {
//   try {
//     console.log(req.params.id);
//     // Fetch the project by ID and populate client and freelancer
//     const project = await Project.findById(req.params.id)
//       .populate("client")
//       .populate("freelancer");

//     if (!project) {
//       return res.status(404).json({ message: "Project not found" });
//     }
// console.log(req.user._id);
//     // Fetch the freelancer of the current user and populate their projects
//     const freelancer= await FreelancerModel.findById(req.user._id).populate({
//         path: "projects", // Assuming the field in FreelancerModel is `projects`
//         populate: [
//           { path: "client" }, // Populate client within project
//           { path: "freelancer" }, // Populate freelancer within project
//         ],
//       }).exec();

//     if (!freelancer) {
//       return res.status(404).json({ message: "Freelancer not found" });
//     }
//     // console.log();
//     // Respond with both project and freelancer data
//     res.status(200).json({projects:freelancer.projects });
//   } catch (error) {
//     console.error("Error fetching project and freelancer:", error);
//     next(error); // Pass the error to the error handling middleware
//   }
// });

exports.notification = catchAsyncError(async (req, res, next) => {});
exports.payment = catchAsyncError(async (req, res, next) => {});
exports.Virtualspace = catchAsyncError(async (req, res, next) => {});
