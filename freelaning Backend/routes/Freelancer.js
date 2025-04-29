const express = require('express');

const router = express.Router();
const {
    home,
    register,
    login,
    signout,
    deleteAccount,
    sendproposal,
    projects,
    Profile,
    editProfile,
    chat,
    notification,   
    payment,
    Virtualspace,
    freelancing,
    loggedin,
    projectid,
    Ongoingprojets,
    Ongoingprojetsid,
    createwallet,
    wallet,
    Showproposal,

} = require("../controllers/FreelancerController");
const {isAuthenticatedFreelancer} = require("../middlewares/Auth")


// Protected route for home freelancer
router.get('/',isAuthenticatedFreelancer,home );


// // for find Loggedin user 
router.get("/loggedin",isAuthenticatedFreelancer,loggedin)


// Registration route for freelancer
router.post('/register',register );


 // Login route for freelancer
router.post('/login',login );


// Signout route for freelancer
router.get("/signout",isAuthenticatedFreelancer,signout)

// delete route for freelancer 
router.get("/deleteAccount",isAuthenticatedFreelancer,deleteAccount)



// send proposal route for freelancer
router.post("/proposal",isAuthenticatedFreelancer,sendproposal)
 
router.get("/project/:id",isAuthenticatedFreelancer,projectid)

//Project route for freelancer
router.get("/project",isAuthenticatedFreelancer,projects)

//profile route for freelancer 
router.get("/profile",isAuthenticatedFreelancer,Profile)

router.get("/Ongoingprojets",isAuthenticatedFreelancer,Ongoingprojets)

// router.get("/Ongoingprojets/:id",isAuthenticatedFreelancer,Ongoingprojetsid)

router.get("/projectproposal/:id",isAuthenticatedFreelancer,Showproposal)
//Edit profile route for freelancer 
router.post("/Editprofile",isAuthenticatedFreelancer,editProfile)

router.post("/createwallet",isAuthenticatedFreelancer,createwallet)
router.post("/wallet",isAuthenticatedFreelancer,wallet)

//wallet route for freelancer 
// router.get("/wallet",isAuthenticatedFreelancer,wallet)

//chat  route  fot freelancer 
// router.get("/chat",isAuthenticatedFreelancer,chat)

//notification  route for freelancer 
// router.get("/notification",isAuthenticatedFreelancer,notification)

//payment  route for freelancer 
// router.get("/payment",isAuthenticatedFreelancer,payment)


//payment  route for freelancer 
// router.get("/virtualspace",isAuthenticatedFreelancer,Virtualspace)

//payment  route for freelancer 
// router.get("/freelancing",isAuthenticatedFreelancer,freelancing)

module.exports = router;
