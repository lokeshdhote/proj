

const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema({

    payment_id: String,
  amount: Number,
  razorpay_signature: String,
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Freelancer",
  },
  freelancerPaymentStatus: {
          type: String,
          enum: ["pending", "completed", "on-hold"],
          default: "pending",
        },
  client:{

    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  clientPaymentStatus: {
          type: String,
          enum: ["pending", "completed", "failed"],
          default: "pending",
        },
  project: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Project",
        }],
     
})
const Payment = mongoose.model("Payment",PaymentSchema)

module.exports = Payment;



//     adminFee: {
//       type: Number,
//       required: [true, "Admin fee is required"],
//       min: [0, "Admin fee cannot be negative"],
//     },
//    
//
//     transactionDetails: {
//       clientToAdmin: {
//         type: String, // Could store transaction ID, reference number, or null if not paid
//         default: null,
//       },
//       adminToFreelancer: {
//         type: String, // Transaction details from admin to freelancer
//         default: null,
//       },
//     },
//     paymentReleaseDate: {
//       type: Date, // Optional field to track when payment to freelancer is scheduled or completed
//       default: null,
//     },
