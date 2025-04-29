const { catchAsyncError } = require("../middlewares/CatchAsyncError.js");
const { sendtoken } = require("../utils/SendToken");
const { sendmail } = require("../utils/Nodemalier");
const AdminPanelModel = require("../models/AdminPanelModel");
const Errorhandler = require("../utils/Errorhandler");
const Freelancer = require("../models/FreelancerModel");
const Client = require("../models/ClientModel");
const  Payment  = require("./FreelancerController");
const Project = require("../models/Project");

exports.home = catchAsyncError(async (req, res) => {
  res.json({ message: 'Secure homepage' });
});

exports.register = catchAsyncError(async (req, res, next) => {
  try {
    
    console.log("Request body:", req.body);

    // Save new AdminPanel user
    const adminPanel = await new AdminPanelModel(req.body).save();
    console.log("Admin Panel created:", adminPanel);

    // Send token upon successful registration
    sendtoken(adminPanel, 200, res,"admin");
  } catch (error) {
    next(error);
  }
});

exports.login = catchAsyncError(async (req, res, next) => {
  try {
    // Find user by email and include password field for comparison
    const adminPanel = await AdminPanelModel.findOne({ email: req.body.email }).select("+password").exec();
    if (!adminPanel) {
      return next(new Errorhandler("User with this email is not found", 404));
    }

    // Compare provided password with stored password
    const isMatch = await adminPanel.comparepassword(req.body.password);
    if (!isMatch) {
      return next(new Errorhandler("Wrong credentials", 401));
    }

    // Send token upon successful login
    sendtoken(adminPanel, 200, res,"admin");
  } catch (error) {
    next(error);
  }
});



exports.freelancersAdmin= catchAsyncError(async (req, res, next) => {

const freelancer =await Freelancer.find({})
res.status(200).json({ freelancer });


})


exports.clientAdmin= catchAsyncError(async (req, res, next) => {
  const client =await Client.find({})
  res.status(200).json({ client });

})
exports.paymentAdmin= catchAsyncError(async (req, res, next) => {
  const payment =await Payment.find({})
  res.status(200).json({ payment });

})
exports.projectAdmin= catchAsyncError(async (req, res, next) => {
  const project =await Project.find({})
  res.status(200).json({ project });

})

exports.virtualspaceAdmin= catchAsyncError(async (req, res, next) => {

  res.status(200).json( "hey" );

})


exports.signout = catchAsyncError(async (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: 'SignOut successfully' });
});
