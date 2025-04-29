const express = require('express');
const {
  createProgressBar,
  updateProgressBar,
  deleteProgressBar,
  getProgressBarPercentage,
} =require('../../controllers/virtualspace/progressController');
const {isAuthenticatedFreelancer} = require("../../middlewares/Auth")

const router = express.Router();

router.post('/progressbar', createProgressBar);
router.put('/progressbar/:workspaceId/:progressBarId',isAuthenticatedFreelancer, updateProgressBar);
router.delete('/progressbar/:workspaceId/:progressBarId',isAuthenticatedFreelancer, deleteProgressBar);
router.get('/progressbar/:workspaceId/:progressBarId',isAuthenticatedFreelancer, getProgressBarPercentage);

module.exports = router;
