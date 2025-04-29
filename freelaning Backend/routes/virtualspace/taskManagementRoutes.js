// routes/taskManagementRoutes.js

const express = require('express');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../../controllers/virtualspace/taskManagementController');
const {isAuthenticatedFreelancer} = require("../../middlewares/Auth")


const router = express.Router();

// Route for creating a task
router.post('/create', isAuthenticatedFreelancer,createTask);

// Route for getting all tasks for a project
router.get('/:workspaceId/:clientName/:projectName/tasks',isAuthenticatedFreelancer, getTasks);

// Route for updating a task
router.put('/:workspaceId/:clientName/:projectName/task/:taskId',isAuthenticatedFreelancer, updateTask);

// Route for deleting a task
router.delete('/:workspaceId/:clientName/:projectName/task/:taskId',isAuthenticatedFreelancer, deleteTask);

module.exports = router;
