const VirtualSpace = require('../../models/VirtualSpaceModel');  // Update with your model's path

const { catchAsyncError } = require('../../middlewares/CatchAsyncError.js'); // Assuming catchAsyncError is in middlewares


// Create a new feedback
exports.createFeedback = catchAsyncError(async (req, res) => {
  const { workspaceId, feedback, rating, submittedBy } = req.body;

  const virtualSpace = await VirtualSpace.findById(workspaceId);
  if (!virtualSpace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  const newFeedback = {
    feedbackId: new Date().getTime().toString(), // Using timestamp as unique feedbackId
    feedback,
    rating,
    submittedBy,
  };

  virtualSpace.clients.forEach(client => {
    client.projects.forEach(project => {
      project.feedback.push(newFeedback);
    });
  });

  await virtualSpace.save();

  res.status(201).json({ message: 'Feedback created successfully', feedback: newFeedback });
});

// Update feedback
exports.updateFeedback = catchAsyncError(async (req, res) => {
  const { workspaceId, feedbackId, feedback, rating } = req.body;

  const virtualSpace = await VirtualSpace.findById(workspaceId);
  if (!virtualSpace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  let feedbackUpdated = false;

  virtualSpace.clients.forEach(client => {
    client.projects.forEach(project => {
      project.feedback.forEach(feedbackItem => {
        if (feedbackItem.feedbackId === feedbackId) {
          feedbackItem.feedback = feedback;
          feedbackItem.rating = rating;
          feedbackUpdated = true;
        }
      });
    });
  });

  if (!feedbackUpdated) {
    return res.status(404).json({ message: 'Feedback not found' });
  }

  await virtualSpace.save();

  res.status(200).json({ message: 'Feedback updated successfully' });
});

// Delete feedback
exports.deleteFeedback = catchAsyncError(async (req, res) => {
  const { workspaceId, feedbackId } = req.body;

  const virtualSpace = await VirtualSpace.findById(workspaceId);
  if (!virtualSpace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  let feedbackDeleted = false;

  virtualSpace.clients.forEach(client => {
    client.projects.forEach(project => {
      const initialFeedbackLength = project.feedback.length;
      project.feedback = project.feedback.filter(feedbackItem => feedbackItem.feedbackId !== feedbackId);

      if (project.feedback.length !== initialFeedbackLength) {
        feedbackDeleted = true;
      }
    });
  });

  if (!feedbackDeleted) {
    return res.status(404).json({ message: 'Feedback not found' });
  }

  await virtualSpace.save();

  res.status(200).json({ message: 'Feedback deleted successfully' });
});

// Get feedback
exports.getFeedback = catchAsyncError(async (req, res) => {
  const { workspaceId } = req.params;

  const virtualSpace = await VirtualSpace.findById(workspaceId);
  if (!virtualSpace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  let allFeedback = [];
  virtualSpace.clients.forEach(client => {
    client.projects.forEach(project => {
      allFeedback = allFeedback.concat(project.feedback);
    });
  });

  res.status(200).json({ feedback: allFeedback });
});
