const { catchAsyncError } = require("../middlewares/CatchAsyncError.js");

const { sendtoken } = require("../utils/SendToken");
const FreelancerModel = require("../models/FreelancerModel");
const ErrorHandler = require("../utils/Errorhandler");
const Freelancer = require("../models/FreelancerModel");
const ProposalModel = require("../models/ProposalModel");
const Project = require("../models/Project");
const {v4:uuidv4} = require("uuid");


exports.resume = catchAsyncError(async (req, res) => {
   
    const freelancer = await Freelancer.findById(req.user.id).exec();
   const resume = freelancer.resume;
    
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }

    res.status(200).json({resume, role: "freelancer"})
  
})





exports.addeducation = catchAsyncError(async (req, res) => {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }

    // Check if the freelancer already has 3 education records
    if (freelancer.resume.education.length >= 3) {
        return res.status(400).json({ message: "You can only add up to 3 education entries." });
    }

    // Add the new education
    freelancer.resume.education.push({ ...req.body, id: uuidv4() });
    await freelancer.save();

    res.status(200).json({ role: "freelancer", message: "Education Added Successfully" });
});

exports.editeducation = catchAsyncError(async (req, res) => {
  
    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    const Index =  freelancer.resume.education.findIndex((i)=>i.id === req.params.id)
    freelancer.resume.education[Index] = {...freelancer.resume.education[Index],...req.body}
    await freelancer.save()
    res.status(200).json({ role: "freelancer", message:"Education Updated successfully"})
   
})
exports.deleteeducation = catchAsyncError(async (req, res) => {
 
    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    const filteredEdu =  freelancer.resume.education.filter((i)=>i.id !== req.params.id)
    // console.log(filteredEdu);
    freelancer.resume.education = filteredEdu
    await freelancer.save()
    res.status(200).json({ role: "freelancer", message:"Education deleted successfully"})
   
})





exports.addinternship = catchAsyncError(async (req, res) => {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }

    // Check if the freelancer already has 3 internships
    if (freelancer.resume.internships.length >= 2) {
        return res.status(400).json({ message: "You can only add up to 3 internships." });
    }

    // Add the new internship
    freelancer.resume.internships.push({ ...req.body, id: uuidv4() });
    await freelancer.save();

    res.status(200).json({ role: "freelancer", message: "Internship Added Successfully" });
});

exports.editinternship = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
     let index = freelancer.resume.internships.findIndex((i) => i.id === req.params.id)
     freelancer.resume.internships[index] = {...freelancer.resume.internships[index],...req.body}
    await freelancer.save()
    res.status(200).json({ role: "freelancer", message:"internship Updated successfully"})
    
})

exports.deleteinternship = catchAsyncError(async (req, res) => {
 
    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    let Filteredinternship =  freelancer.resume.internships.filter((i)=>i.id !== req.params.id)
    freelancer.resume.internships = Filteredinternship
    await freelancer.save()
    res.status(200).json({ role: "freelancer", message:"internship Deleted successfully"})
 
})





exports.addresponsibilities = catchAsyncError(async (req, res) => {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    if (freelancer.resume.responsibilities.length >= 2) {
        return res.status(400).json({ message: "You can only add up to 2 responsibilities entries." });
    }
    // If responsibilities is an array, push the new responsibility object
    freelancer.resume.responsibilities.push({ ...req.body, id: uuidv4() });

    // Save the updated freelancer document
    await freelancer.save();

    // Return a success response
    res.status(200).json({ role: "freelancer", message: "Responsibilities Added Successfully" });
});


exports.editresponsibilities = catchAsyncError(async (req, res) => {
 
    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    let index = freelancer.resume.responsibilities.findIndex((i) => i.id === req.params.id)
    freelancer.resume.responsibilities[index] = {...freelancer.resume.responsibilities[index],...req.body}
   await freelancer.save()
   res.status(200).json({ role: "freelancer", message:"responsibilities Updated successfully"})
 
})

exports.deleteresponsibilities = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
    let Filteredresponsibilities =  freelancer.resume.responsibilities.filter((i)=>i.id !== req.params.id)
    freelancer.resume.responsibilities = Filteredresponsibilities
    await freelancer.save()
    res.status(200).json({ role: "freelancer" , message:"responsibilities Deleted successfully"})
    
})





exports.addjob = catchAsyncError(async (req, res) => {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    if (freelancer.resume.job.length >= 3) {
        return res.status(400).json({ message: "You can only add up to 3 job entries." });
    }

    // If job is an array, push the new job object
    freelancer.resume.job.push({ ...req.body, id: uuidv4() });

    // Save the updated freelancer document
    await freelancer.save();

    // Return a success response
    res.status(200).json({ role: "freelancer", message: "Job Added Successfully" });
});

exports.editjob = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
     let index = freelancer.resume.job.findIndex((i) => i.id === req.params.id)
     freelancer.resume.job[index] = {...freelancer.resume.job[index],...req.body}
    await freelancer.save()
    res.status(200).json({ role: "freelancer", message:"job Updated successfully"})
    
})

exports.deletejob = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
    let Filteredjob =  freelancer.resume.job.filter((i)=>i.id !== req.params.id)
    freelancer.resume.job = Filteredjob
    await freelancer.save()
    res.status(200).json({ role: "freelancer", message:"job Deleted successfully"})
    
})





exports.editcourses = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
     let index = freelancer.resume.courses.findIndex((i) => i.id === req.params.id)
     freelancer.resume.courses[index] = {...freelancer.resume.courses[index],...req.body}
    await freelancer.save()
    res.status(200).json({ role: "freelancer",message:"courses Updated successfully"})
    
})

exports.deletecourses = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
    let Filteredcourses =  freelancer.resume.courses.filter((i)=>i.id !== req.params.id)
    freelancer.resume.courses = Filteredcourses
    await freelancer.save()
    res.status(200).json({ role: "freelancer",message:"courses Deleted successfully"})
    
})


exports.addcourses = catchAsyncError(async (req, res) => {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
 
    if (freelancer.resume.courses.length >= 5) {
        return res.status(400).json({ message: "You can only add up to 5 courses entries." });
    }
    // Add the new course to the courses array
    freelancer.resume.courses.push({ ...req.body, id: uuidv4() });

    // Save the freelancer document
    await freelancer.save();

    // Return a success response
    res.status(200).json({ role: "freelancer", message: "Courses Added Successfully" });
});





exports.addprojects = catchAsyncError(async (req, res) => {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }

    if (freelancer.resume.projects.length >= 3) {
        return res.status(400).json({ message: "You can only add up to 3 projects entries." });
    }
    // Add the new project to the projects array
    freelancer.resume.projects.push({ ...req.body, id: uuidv4() });
    
    // Save the freelancer document
    await freelancer.save();

    // Return a success response
    res.status(200).json({ role: "freelancer", message: "Projects Added Successfully" });
});

exports.editprojects = catchAsyncError(async (req, res) => {
   
    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    let index = freelancer.resume.projects.findIndex((i) => i.id === req.params.id)
    freelancer.resume.projects[index] = {...freelancer.resume.projects[index],...req.body}
   await freelancer.save()
   res.status(200).json({ role: "freelancer",message:"projects Updated successfully"})
   
})

exports.deleteprojects = catchAsyncError(async (req, res) => {
   
    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    let Filteredprojects =  freelancer.resume.projects.filter((i)=>i.id !== req.params.id)
    freelancer.resume.projects = Filteredprojects
    await freelancer.save()
    res.status(200).json({ role: "freelancer",message:"projects Deleted successfully"})
   
})





exports.editskills = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
     let index = freelancer.resume.skills.findIndex((i) => i.id === req.params.id)
     freelancer.resume.skills[index] = {...freelancer.resume.skills[index],...req.body}
    await freelancer.save()
    res.status(200).json({ role: "freelancer",message:"skills Updated successfully"})
    
})

exports.deleteskills = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
    let Filteredskills =  freelancer.resume.skills.filter((i)=>i.id !== req.params.id)
    freelancer.resume.skills = Filteredskills
    await freelancer.save()
    res.status(200).json({ role: "freelancer",message:"skills Deleted successfully"})
    
})


exports.addskills = catchAsyncError(async (req, res) => {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    
    freelancer.resume.skills.push({ ...req.body, id: uuidv4() });
    await freelancer.save();

    res.status(200).json({ role: "freelancer", message: "Skills Added Successfully" });
});





exports.editlink = catchAsyncError(async (req, res) => {
    
    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
 let index = freelancer.resume.link.findIndex((i) => i.id === req.params.id)
 freelancer.resume.link[index] = {...freelancer.resume.link[index],...req.body}
await freelancer.save()
res.status(200).json({ role: "freelancer",message:"link Updated successfully"})

})

exports.dellink = catchAsyncError(async (req, res) => {

    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
let Filteredlink =  freelancer.resume.link.filter((i)=>i.id !== req.params.id)
freelancer.resume.link = Filteredlink
await freelancer.save()
res.status(200).json({ role: "freelancer",message:"link Deleted successfully"})

})

exports.addlink = catchAsyncError(async (req, res) => {

    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
 freelancer.resume.link = {...req.body,id:uuidv4()}
await freelancer.save()
res.status(200).json({ role: "freelancer",message:"link Added successfully"})

})




exports.editaccomplishments = catchAsyncError(async (req, res) => {
    
        const freelancer = await Freelancer.findById(req.user.id).exec()
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
     let index = freelancer.resume.accomplishments.findIndex((i) => i.id === req.params.id)
     freelancer.resume.accomplishments[index] = {...freelancer.resume.accomplishments[index],...req.body}
    await freelancer.save()
    res.status(200).json({ role: "freelancer", message:"accomplishments Updated successfully"})
    
})

exports.deleteaccomplishments = catchAsyncError(async (req, res) => {
   
    const freelancer = await Freelancer.findById(req.user.id).exec()
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }
    let Filteredaccomplishments =  freelancer.resume.accomplishments.filter((i)=>i.id !== req.params.id)
    freelancer.resume.accomplishments = Filteredaccomplishments
    await freelancer.save()
    res.status(200).json({ role: "freelancer", message:"accomplishments Deleted successfully"})
   
})

exports.addaccomplishments = catchAsyncError(async (req, res) => {
    const freelancer = await Freelancer.findById(req.user.id).exec();
    if (!freelancer) {
        return res.status(404).json({ message: "Freelancer not found" });
    }

    if (freelancer.resume.accomplishments.length >= 2) {
        return res.status(400).json({ message: "You can only add up to 2 accomplishments entries." });
    }
    
    freelancer.resume.accomplishments.push({ ...req.body, id: uuidv4() });
    await freelancer.save();

    res.status(200).json({ role: "freelancer", message: "Accomplishments Added Successfully" });
});
