const express = require('express');
const { createContract, cancelContract, getContracts } = 
require('../../controllers/virtualspace/contractController');
const {isAuthenticatedFreelancer} = require("../../middlewares/Auth")
const router = express.Router();

// Route to create a contract
router.post('/createContract',isAuthenticatedFreelancer, createContract);

// Route to cancel a contract
router.put('/cancelContract', isAuthenticatedFreelancer,cancelContract);

// Route to get all contracts for a workspace
router.get('/:workspaceId/contracts',isAuthenticatedFreelancer, getContracts);

module.exports = router;
