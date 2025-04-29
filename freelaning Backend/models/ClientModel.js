const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const ClientSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
      minLength: [2, "First name must have at least 2 characters"],
      maxLength: [20, "First name must be less than 20 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
      minLength: [2, "Last name must have at least 2 characters"],
      maxLength: [20, "Last name must be less than 20 characters"],
    },
    email: {
      unique: true,
      type: String,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      select: false,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters"],
      maxLength: [16, "Password must be at most 16 characters"],
    },
    
    langauge:[{
      type: String,
      required: [true, "Language is required"],
    },
],
    gender: {
      type: String,
      required: [true, "Gender is required"],
   
    },
    dateOfBirth: {
        type: Date, // Adding the date of birth field
        // required: [true, "Date of birth is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    
    contact: {
      type: String,
      required: [true, "Contact is required"],
    },
    resetPasswordToken: {
      type: String,
      default: null, // Changed from "0" to null
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project", // Changed to an array to allow multiple projects
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken:{
      type: String,
       default:"0"
    },
    profileimg:{
      type:Object,
      default:{
          fileId:"",
          url:"https://imgs.search.brave.com/06UqpjzRQF6vQGKgaUceK1zztTR0ALeWoK5IC-6m7gc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/dXNlci1ibHVlLWdy/YWRpZW50Xzc4Mzcw/LTQ2OTIuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA"
      }
  },
  },
  { timestamps: true }
);

// Pre-save middleware to hash password
ClientSchema.pre("save", function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

// Method to compare passwords
ClientSchema.methods.comparepassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Method to generate JWT token
ClientSchema.methods.getjwttoken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
