const VirtualSpace = require("../models/VirtualSpaceModel");  // Assuming this is the path to your model


// Create Feedback (for both client and freelancer)
const createFeedback = async (req, res) => {
  try {
    const { workspaceId, clientId, projectId, feedbackText, rating, submittedBy } = req.body;


    // Find the workspace
    const workspace = await VirtualSpace.findById(workspaceId);
    if (!workspace) return res.status(404).json({ message: "Workspace not found" });

    // Find the project by clientId and projectId
    const client = workspace.clients.find(client => client._id.toString() === clientId);
    if (!client) return res.status(404).json({ message: "Client not found" });

    const project = client.projects.find(project => project._id.toString() === projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Add the feedback to the project's feedback array
    const newFeedback = {
      feedbackId: new mongoose.Types.ObjectId(),
      feedback: feedbackText,
      rating,
      submittedBy,
      date: new Date()
    };
    

    project.feedback.push(newFeedback);
    await workspace.save();

    res.status(201).json({ message: "Feedback added successfully", feedback: newFeedback });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all feedback for a specific project (client or freelancer)
const getFeedback = async (req, res) => {
  try {
    const { workspaceId, clientId, projectId } = req.params;

    // Find the workspace
    const workspace = await VirtualSpace.findById(workspaceId);
    if (!workspace) return res.status(404).json({ message: "Workspace not found" });

    // Find the client and project
    const client = workspace.clients.find(client => client._id.toString() === clientId);
    if (!client) return res.status(404).json({ message: "Client not found" });

    const project = client.projects.find(project => project._id.toString() === projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Return the feedback array for the project
    res.status(200).json({ feedback: project.feedback });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Feedback
const updateFeedback = async (req, res) => {
  try {
    const { feedbackId } = req.params;
    const { feedbackText, rating } = req.body;

    // Find the feedback across the workspace and projects
    const workspace = await VirtualSpace.findOne({ 'clients.projects.feedback.feedbackId': feedbackId });
    if (!workspace) return res.status(404).json({ message: "Feedback not found" });

    // Traverse through the workspace structure to find the specific feedback
    for (const client of workspace.clients) {
      for (const project of client.projects) {
        const feedback = project.feedback.find(fb => fb.feedbackId.toString() === feedbackId);
        if (feedback) {
          feedback.feedback = feedbackText || feedback.feedback;
          feedback.rating = rating || feedback.rating;

          await workspace.save();
          return res.status(200).json({ message: "Feedback updated successfully", feedback });
        }
      }
    }

    res.status(404).json({ message: "Feedback not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Feedback
const deleteFeedback = async (req, res) => {
  try {
    const { feedbackId } = req.params;

    // Find the workspace that contains the feedback
    const workspace = await VirtualSpace.findOne({ 'clients.projects.feedback.feedbackId': feedbackId });
    if (!workspace) return res.status(404).json({ message: "Feedback not found" });

    // Traverse through the workspace structure to find the feedback
    for (const client of workspace.clients) {
      for (const project of client.projects) {
        const feedbackIndex = project.feedback.findIndex(fb => fb.feedbackId.toString() === feedbackId);
        if (feedbackIndex !== -1) {
          project.feedback.splice(feedbackIndex, 1); // Remove the feedback
          await workspace.save();
          return res.status(200).json({ message: "Feedback deleted successfully" });
        }
      }
    }

    res.status(404).json({ message: "Feedback not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback
};