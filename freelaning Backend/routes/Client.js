const express = require('express');

const router = express.Router();
const {
    home,
    register,
    login,
    signout,
    projects,
    Profile,
    deleteAccount,
    CreateProject,
    editProfile,

    notification,   
    payment,
    Virtualspace,
    Showproposal,
    freelancer,
    loggedin,
    myprojects,
    acceptproposal,
    Ongoingprojets,
    allprojects
    

} = require("../controllers/ClientController");
const {isAuthenticated, isAuthenticatedFreelancer} = require("../middlewares/Auth")



// // Protected route for home client
router.get('/',isAuthenticated,home );


// // for find Loggedin user 
router.get("/loggedin",isAuthenticated,loggedin)



// // Registration route for client
router.post('/register',register );


// // Login route for client
router.post('/login',login );

// // Signout route for client
router.get("/signout",isAuthenticated,signout)

// //Project route for client
router.get("/project",isAuthenticated,projects)

router.get("/myproject",isAuthenticated,myprojects)

// //Freelancer route for client
router.get("/freelancers",isAuthenticated,freelancer)


// //profile route for client 
router.get("/profile",isAuthenticated,Profile)

// //deleteAccount route for  client
router.get("/deleteAccount",isAuthenticated,deleteAccount)

// // CreateProject route fro client 
router.post("/CreateProject",isAuthenticated,CreateProject)


router.get("/Ongoingprojets",isAuthenticatedFreelancer,Ongoingprojets)


// //Edit profile route for freelancer 
router.post("/Editprofile",isAuthenticated,editProfile)

router.get("/projectproposal/:id",isAuthenticated,Showproposal)

router.post("/acceptproposal/:id",isAuthenticated,acceptproposal)


//notification  route for Client 
router.get("/notification",isAuthenticated,notification)

// payment  route for Client 
router.get("/payment",isAuthenticated,payment)


//payment  route for Client 
router.get("/virtualspace",isAuthenticated,Virtualspace)


router.get("/projects",allprojects)
module.exports = router;
