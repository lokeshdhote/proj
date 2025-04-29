const express = require('express');
const router = express.Router();
const { 
  createFeedback, 
  getFeedback, 
  updateFeedback, 
  deleteFeedback 
} = require('../controllers/VirtualSpaceController');

// Route to create feedback
router.post('/feedback', createFeedback);

// Route to get all feedback for a project
router.get('/feedback/:workspaceId/:clientId/:projectId', getFeedback);

// Route to update feedback
router.put('/feedback/:feedbackId', updateFeedback);

// Route to delete feedback
router.delete('/feedback/:feedbackId', deleteFeedback);

module.exports = router;