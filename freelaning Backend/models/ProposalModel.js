const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    skills: [
      {
        type: String,
        required: [true, "Skill is required"],
      },
    ],
    deadline: {
      type: Date, // Updated to Date
      required: [true, "Deadline is required"],
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

    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    budget: {
      type: Number, // Updated to Number
      required: [true, "Budget is required"],
    },

    proposal: {
      type: String,
      enum: ["pending", "accept", "decline"], // Added enum for controlled values
      default: "pending",
    },
    projectid:{
type:String,
    },
    URL: {
      type: String,
    },
  },

  { timestamps: true }
);

const Proposal = mongoose.model("Proposal", proposalSchema);

module.exports = Proposal;
