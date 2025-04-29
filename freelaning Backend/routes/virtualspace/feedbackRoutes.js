const express = require('express');
const {
  createFeedback,
  updateFeedback,
  deleteFeedback,
  getFeedback,
} =  require('../../controllers/virtualspace/feedbackController');
const {isAuthenticatedFreelancer} = require("../../middlewares/Auth")

const router = express.Router();

// Route to create feedback
// router.post('/createFeedback',isAuthenticatedFreelancer, createFeedback);

// Route to update feedback
// router.put('/updateFeedback',isAuthenticatedFreelancer, updateFeedback);

// Route to delete feedback
router.delete('/deleteFeedback',isAuthenticatedFreelancer, deleteFeedback);

// Route to get all feedback for a workspace
router.get('/:workspaceId/feedback', isAuthenticatedFreelancer,getFeedback);

module.exports = router;
