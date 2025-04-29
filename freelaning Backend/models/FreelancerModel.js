const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const FreelancerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
      min: [2, "First name must have at least 2 characters"],
      max: [20, "First name must be less than 20 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
      min: [2, "Last name must have at least 2 characters"],
      max: [20, "Last name must be less than 20 characters"],
    },
    email: {
      type: String,
      unique: true,
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
    bio:{
      type:String
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    contact: {
      type: Number,
      required: [true, "Contact is required"],
    },
    dateOfBirth: {
      type: Date, // Adding the date of birth field
      required: [true, "Date of birth is required"],
    },
    resetPasswordToken: {
      type: String,
      default: "0",
    },
    earnings: { 
      type: Number,
       default: 0 
      },
    linkedin:String,
    Github:String,
    project:String,
    bio:String,
projects:[
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project", // Changed to an array to allow multiple projects
  },
],

    isVerified: {
      type: Boolean,
      default: false,
    },
    resume:{
      education:[],
      internships:[],
      job:[],
      responsibilities:[],
      courses:[],
      projects:[],
      skills:[],
      link:[],
      accomplishments:[]

    },
    langauge:[{
      type: String,
      required: [true, "Language is required"],
    },
],
skills:[{
  type: String,
  required: [true, "skill is required"],
},
],
wallet:{
  accountHolderName:String,
  bankName:String,
  accountNumber:Number,
  ifscCode:String,
  upiId:String,
  UPIphoneNumber:Number,
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
FreelancerSchema.pre("save", function () {
  if (!this.isModified("password")) {
    return;
  }
  let salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

// Method to compare passwords
FreelancerSchema.methods.comparepassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Method to generate JWT token
FreelancerSchema.methods.getjwttoken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const Freelancer = mongoose.model("Freelancer", FreelancerSchema);

module.exports = Freelancer;
