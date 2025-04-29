const jwt = require("jsonwebtoken");
const Errorhandler = require("../utils/Errorhandler");
const Freelancer = require("../models/FreelancerModel");
const Client = require("../models/ClientModel");
const { catchAsyncError } = require("./CatchAsyncError");

exports.isAuthenticated = catchAsyncError(async function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return next(new Errorhandler("Please log in to access this resource", 401));
  }

  // Extract the token (remove 'Bearer ' from the beginning)
  const token = authHeader.split(" ")[1];

  if (!token || token === "null") {
    return next(new Errorhandler("Please log in to access this resource", 401));
  }

  // Verify the token
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await Client.findById(decodedData.id);

  next();
});

exports.isAuthenticatedFreelancer = catchAsyncError(async function (
  req,
  res,
  next
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return next(new Errorhandler("Please log in to access this resource", 401));
  }

  // Extract the token (remove 'Bearer ' from the beginning)
  const token = authHeader.split(" ")[1];

  if (!token || token === "null") {
    return next(new Errorhandler("Please log in to access this resource", 401));
  }

  // Verify the token
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await Freelancer.findById(decodedData.id);

  next();
});
