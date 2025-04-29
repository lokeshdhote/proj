const express = require('express');

const Router = express.Router();
const {
    resume,
    addeducation,
    editeducation,
    deleteeducation,
    addinternship,
    deleteinternship,
    editinternship,
    addcourses,
    editcourses,
    deletecourses,
    addprojects,
    editprojects,
    deleteprojects,
    addskills,
    deleteskills,
    editskills,
    addjob,
    deletejob,
    editjob,
    addaccomplishments,
    deleteaccomplishments,
    editaccomplishments,
    addresponsibilities,
    deleteresponsibilities,
    editresponsibilities,addlink,dellink,editlink

   
} = require("../controllers/resumeController");
const {isAuthenticatedFreelancer} = require("../middlewares/Auth")
Router.post('/',isAuthenticatedFreelancer,resume );
//education routes
Router.post('/add-edu',isAuthenticatedFreelancer,addeducation );
Router.post('/edit-edu/:id',isAuthenticatedFreelancer,editeducation );
Router.post('/del-edu/:id',isAuthenticatedFreelancer,deleteeducation);
//interships routes
Router.post('/addintern',isAuthenticatedFreelancer,addinternship );
Router.post('/editintern/:id',isAuthenticatedFreelancer,editinternship );
Router.post('/delintern/:id',isAuthenticatedFreelancer,deleteinternship);

//courses 

Router.post('/addcourse',isAuthenticatedFreelancer,addcourses );
Router.post('/editcourse/:id',isAuthenticatedFreelancer,editcourses );
Router.post('/delcourse/:id',isAuthenticatedFreelancer,deletecourses);

//projects

Router.post('/addproject',isAuthenticatedFreelancer,addprojects );
Router.post('/editproject/:id',isAuthenticatedFreelancer,editprojects );
Router.post('/delproject/:id',isAuthenticatedFreelancer,deleteprojects);

//skills

Router.post('/addskill',isAuthenticatedFreelancer,addskills );
Router.post('/delskill/:id',isAuthenticatedFreelancer,deleteskills);
Router.post('/editskill/:id',isAuthenticatedFreelancer,editskills);

//job

Router.post('/addjob',isAuthenticatedFreelancer,addjob );
Router.post('/deljob/:id',isAuthenticatedFreelancer,deletejob);
Router.post('/editjob/:id',isAuthenticatedFreelancer,editjob);
 //link
 
Router.post('/addlink',isAuthenticatedFreelancer,addlink );
Router.post('/dellink/:id',isAuthenticatedFreelancer,dellink);
Router.post('/editlink/:id',isAuthenticatedFreelancer,editlink);


//accomplishments
        
Router.post('/addaccomplishment',isAuthenticatedFreelancer,addaccomplishments );
Router.post('/delaccomplishment/:id',isAuthenticatedFreelancer,deleteaccomplishments);
Router.post('/editaccomplishment/:id',isAuthenticatedFreelancer,editaccomplishments);

//responsibilities

Router.post('/addresponsibility',isAuthenticatedFreelancer,addresponsibilities );
Router.post('/delresponsibility/:id',isAuthenticatedFreelancer,deleteresponsibilities);
Router.post('/editresponsibility/:id',isAuthenticatedFreelancer,editresponsibilities);

module.exports = Router;