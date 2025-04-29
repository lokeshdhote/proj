const express = require('express');
const {

  getAllWorkspaces,addCalendarEvent,addTodo,updateTodo,deleteTodo,createProgressTracker,updateProgressTracker,addPartToProgressTracker,deletePartFromProgressTracker
  ,documents,
} = require('../../controllers/virtualspace/workspaceController');
const {isAuthenticatedFreelancer} = require("../../middlewares/Auth")

const router = express.Router();
// Routes for /workspace
router.get('/:id', isAuthenticatedFreelancer,getAllWorkspaces); // Get all workspaces


// Calendar Management Routes
router.post('/:id/calendar',isAuthenticatedFreelancer,addCalendarEvent);  // Add Event



// Todo Routes
router.post('/:id/todos', isAuthenticatedFreelancer,addTodo);
router.post('/:id/todos/:taskId',isAuthenticatedFreelancer,updateTodo);
router.get('/:id/todos/:taskId',isAuthenticatedFreelancer,deleteTodo);


// Create a progress tracker
router.post('/:id/progress', isAuthenticatedFreelancer,createProgressTracker);

// Update the progress tracker (goal, status, parts, percentage)
router.post('/update/progress/:id', isAuthenticatedFreelancer,updateProgressTracker);

router.post('/:id/progress/document', isAuthenticatedFreelancer,documents);

// Add a part to progress tracker
router.post('/:id/progress/parts', isAuthenticatedFreelancer,addPartToProgressTracker);


// Delete a part from progress tracker
router.delete('/:id/progress/parts/:partName', isAuthenticatedFreelancer,deletePartFromProgressTracker);



module.exports = router;


