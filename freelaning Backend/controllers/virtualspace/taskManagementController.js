const mongoose = require('mongoose');
const VirtualSpace = require('../../models/VirtualSpaceModel');  // Update with your model's path
const { catchAsyncError } = require('../../middlewares/CatchAsyncError.js'); // Assuming it's in middlewares

// Create a new task within a project of a client
const createTask = catchAsyncError(async (req, res) => {
  const { workspaceId, clientName, projectName, task } = req.body;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ error: 'Workspace not found' });
  }

  const client = workspace.clients.find(c => c.clientName === clientName);
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }

  const project = client.projects.find(p => p.projectName === projectName);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  project.tasks.push(task);
  await workspace.save();

  res.status(201).json({ message: 'Task created successfully', task });
});

// Get all tasks for a specific project
const getTasks = catchAsyncError(async (req, res) => {
  const { workspaceId, clientName, projectName } = req.params;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ error: 'Workspace not found' });
  }

  const client = workspace.clients.find(c => c.clientName === clientName);
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }

  const project = client.projects.find(p => p.projectName === projectName);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.status(200).json(project.tasks);
});

// Update a task by taskId
const updateTask = catchAsyncError(async (req, res) => {
  const { workspaceId, clientName, projectName, taskId } = req.params;
  const updatedTask = req.body;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ error: 'Workspace not found' });
  }

  const client = workspace.clients.find(c => c.clientName === clientName);
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }

  const project = client.projects.find(p => p.projectName === projectName);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  const taskIndex = project.tasks.findIndex(t => t.taskId === parseInt(taskId));
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Update task data
  project.tasks[taskIndex] = { ...project.tasks[taskIndex], ...updatedTask };
  await workspace.save();

  res.status(200).json({ message: 'Task updated successfully', task: project.tasks[taskIndex] });
});

// Delete a task by taskId
const deleteTask = catchAsyncError(async (req, res) => {
  const { workspaceId, clientName, projectName, taskId } = req.params;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ error: 'Workspace not found' });
  }

  const client = workspace.clients.find(c => c.clientName === clientName);
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }

  const project = client.projects.find(p => p.projectName === projectName);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  const taskIndex = project.tasks.findIndex(t => t.taskId === parseInt(taskId));
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Remove the task
  project.tasks.splice(taskIndex, 1);
  await workspace.save();

  res.status(200).json({ message: 'Task deleted successfully' });
});

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
