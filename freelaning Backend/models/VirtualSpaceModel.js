const mongoose = require("mongoose");

// Unified Virtual Space Schema
const VirtualSpaceSchema = new mongoose.Schema(
  {
    workspaceName: {
      type: String, // Name of the workspace
    },
    Freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer", // Reference to the User collection
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client", // Reference to the User collection
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project", // Reference to the User collection
    },

    calender: [
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
    ],

    todos: [
      {
        taskName: {
          type: String,
          //  required: true
        },
        description: {
          type: String,
        },
        status: {
          type: String,
          default: "Pending",
        },
      },
    ],
    tasks: [
      {
        name: {
          type: String,
          // required: true
        },
        status: {
          type: String,
          // enum: ['Pending', 'In Progress', 'Completed'],
          default: "Pending",
        },

        dueDate: { type: Date },
      },
    ],
    invoices: [
      {
        amount: {
          type: Number,
          // required: true
        },
        issueDate: {
          type: Date,
          default: Date.now,
        },
        dueDate: {
          type: Date,
        },
        status: {
          type: String,
          // enum: ['Paid', 'Pending', 'Overdue'],
          default: "Pending",
        },
      },
    ],
    feedback: [
      {
        feedback: {
          type: String,
          // required: true
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        date: { type: Date, default: Date.now },
      },
    ],
    documents: 
      {
        type:Object,
      default:{
        fileId:"",
        url:"",
        filename:String,
        
        },
       
      },

    progressTrackers: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          default: () => new mongoose.Types.ObjectId(),
        },
        goal: String,
        parts: [
          {
            title: { type: String },
            completed: { type: Boolean, default: false },
          },
        ],
        percentageCompleted: {
          type: Number,
          default: 0,
          min: 0,
          max: 100,
        },
        status: {
          type: String,
          default: "Incomplete",
        },
        updatedAt: { type: Date, default: Date.now },
      },
    ],

    contracts: [
      {
        terms: {
          type: String,
          // required: true
        },
        startDate: {
          type: Date,
          //  required: true
        },
        endDate: {
          type: Date,
          //  required: true
        },
        status: {
          type: String,
          // enum: ['Active', 'Cancelled'],
          default: "Active",
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    analytics: {
      totalEarnings: {
        type: Number,
        default: 0,
      },
      completedTasks: {
        type: Number,
        default: 0,
      },
      pendingTasks: {
        type: Number,
        default: 0,
      },
      overdueInvoices: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VirtualSpace", VirtualSpaceSchema);
