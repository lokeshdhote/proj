const { catchAsyncError } = require('../../middlewares/CatchAsyncError.js'); // Assuming catchAsyncError is in middlewares

const VirtualSpace = require('../../models/VirtualSpaceModel');  // Update with your model's path

// Create a new contract
exports.createContract = catchAsyncError(async (req, res) => {
  const { workspaceId, userId, terms, startDate, endDate } = req.body;

  const virtualSpace = await VirtualSpace.findById(workspaceId);
  if (!virtualSpace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  const newContract = {
    userId,
    terms,
    startDate,
    endDate,
  };

  virtualSpace.contracts.push(newContract);
  await virtualSpace.save();

  res.status(201).json({ message: 'Contract created successfully', contract: newContract });
});

// Cancel a contract
exports.cancelContract = catchAsyncError(async (req, res) => {
  const { workspaceId, contractId } = req.body;

  const virtualSpace = await VirtualSpace.findById(workspaceId);
  if (!virtualSpace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  const contract = virtualSpace.contracts.id(contractId);
  if (!contract) {
    return res.status(404).json({ message: 'Contract not found' });
  }

  if (contract.status === 'Cancelled') {
    return res.status(400).json({ message: 'Contract is already cancelled' });
  }

  contract.status = 'Cancelled';
  contract.updatedAt = Date.now();

  await virtualSpace.save();

  res.status(200).json({ message: 'Contract cancelled successfully', contract });
});

// Get all contracts
exports.getContracts = catchAsyncError(async (req, res) => {
  const { workspaceId } = req.params;

  const virtualSpace = await VirtualSpace.findById(workspaceId).populate('contracts.userId');
  if (!virtualSpace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  res.status(200).json({ contracts: virtualSpace.contracts });
});
