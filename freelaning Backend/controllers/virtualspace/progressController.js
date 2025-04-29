const mongoose = require('mongoose');
const { catchAsyncError } = require('../../middlewares/CatchAsyncError.js');// Assuming it's in middlewares
const VirtualSpace = require('../../models/VirtualSpaceModel');  // Update with your model's path

// Create a new progress bar
exports.createProgressBar = catchAsyncError(async (req, res) => {
  const { workspaceId, name, createdBy } = req.body;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(workspaceId)) {
    return res.status(400).json({ message: 'Invalid Workspace ID' });
  }

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  const newProgressBar = {
    progressBarId: new mongoose.Types.ObjectId(),
    name,
    createdBy,
  };

  workspace.progressTrackers.push(newProgressBar);
  await workspace.save();

  res.status(201).json({ message: 'Progress bar created', progressBar: newProgressBar });
});

// Update progress bar percentage
exports.updateProgressBar = catchAsyncError(async (req, res) => {
  const { workspaceId, progressBarId } = req.params;
  const { percentageCompleted, status } = req.body;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

  const progressBar = workspace.progressTrackers.find(
    (tracker) => tracker.progressBarId.toString() === progressBarId
  );

  if (!progressBar) return res.status(404).json({ message: 'Progress bar not found' });

  if (percentageCompleted !== undefined) progressBar.percentageCompleted = percentageCompleted;
  if (status) progressBar.status = status;

  await workspace.save();
  res.status(200).json({ message: 'Progress bar updated', progressBar });
});

// Delete progress bar
exports.deleteProgressBar = catchAsyncError(async (req, res) => {
  const { workspaceId, progressBarId } = req.params;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

  workspace.progressTrackers = workspace.progressTrackers.filter(
    (tracker) => tracker.progressBarId.toString() !== progressBarId
  );

  await workspace.save();
  res.status(200).json({ message: 'Progress bar deleted' });
});

// Get progress percentage
exports.getProgressBarPercentage = catchAsyncError(async (req, res) => {
  const { workspaceId, progressBarId } = req.params;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

  const progressBar = workspace.progressTrackers.find(
    (tracker) => tracker.progressBarId.toString() === progressBarId
  );

  if (!progressBar) return res.status(404).json({ message: 'Progress bar not found' });

  res.status(200).json({ percentageCompleted: progressBar.percentageCompleted });
});
