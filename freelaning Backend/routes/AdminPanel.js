const express = require('express');
const router = express.Router();
const { home, register, login, signout,freelancersAdmin,clientAdmin,projectAdmin,virtualspaceAdmin,paymentAdmin } = require("../controllers/AdminPanelController");
const { isAuthenticated } = require("../middlewares/Auth");



// // Protected route for home admin
router.get('/', isAuthenticated, home);



// // Registration route for Admin
router.post('/register', register);



// // Login route for Admin
router.post('/login', login);



// // Signout route for Admin
router.get('/signout', isAuthenticated, signout);




router.get('/freelancer',isAuthenticated,freelancersAdmin)




router.get('/client',isAuthenticated,clientAdmin)



router.get('/payment',isAuthenticated,paymentAdmin)


  
router.get('/project',isAuthenticated,projectAdmin)


router.get('/virtualspace',isAuthenticated,virtualspaceAdmin)



module.exports = router;
