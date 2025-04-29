const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    organization: {
      type: String,
      required: [true, "Organization is required"],
    },
    skill: [
      {
        type: String,
        required: [true, "Skill is required"],
      },
    ],
    categories: {
      type: String,
      required: [true, "Categories are required"],
    //   enum: ["Web Development", "Graphic Design", "Writing", "Data Science", "Other"], // Example categories
    },
    deadline: {
      type: Date, // Changed to Date
      required: [true, "Deadline is required"],
    },
    budget: {
      type: Number, // Changed to Number
      required: [true, "Budget is required"],
    },
  Freelancerbudget:{
    type:Number,
  },
    language: [
      {
        type: String,
        required: [true, "Language is required"],
      },
    ],
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    status: {
      type: String,
      enum: ["open", "in progress", "completed"],
      default: "open",
    },
    client:{

      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    freelancer:{

      type: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer",
    },
    Payment:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
  
    },
    PaymentStatus: {
      type: String,
      enum: ["pending", "completed", "on-hold"],
      default: "pending",
    },
    Extrarequirement:{
      type:String,
    },
    workspace:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "VirtualSpace",
  
    },
    active:{
      type: String,
      
      default: "failed", 
    }

  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
