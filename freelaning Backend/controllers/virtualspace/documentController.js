const { catchAsyncError } = require('../../middlewares/CatchAsyncError.js'); // Assuming catchAsyncError is in middlewares
const VirtualSpace = require('../../models/VirtualSpaceModel');  // Update with your model's path

// Add a document to a workspace
const addDocument = catchAsyncError(async (req, res) => {
  const { workspaceId, userId } = req.params;
  const { fileName, fileUrl, fileType, size } = req.body;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  const newDocument = {
    fileName,
    fileUrl,
    fileType,
    size,
    uploadedBy: userId,
    uploadedAt: new Date(),
  };

  if (!workspace.documents) {
    workspace.documents = [];
  }

  workspace.documents.push(newDocument);
  await workspace.save();

  res.status(201).json({ message: 'Document added successfully', document: newDocument });
});

// Get all documents in a workspace
const getAllDocuments = catchAsyncError(async (req, res) => {
  const { workspaceId } = req.params;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  res.status(200).json({ documents: workspace.documents });
});

// Get a specific document by its ID
const getDocumentById = catchAsyncError(async (req, res) => {
  const { workspaceId, documentId } = req.params;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  const document = workspace.documents.id(documentId);
  if (!document) {
    return res.status(404).json({ message: 'Document not found' });
  }

  res.status(200).json({ document });
});

// Update a document's details
const updateDocument = catchAsyncError(async (req, res) => {
  const { workspaceId, documentId } = req.params;
  const { fileName, fileUrl, fileType, size } = req.body;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  const document = workspace.documents.id(documentId);
  if (!document) {
    return res.status(404).json({ message: 'Document not found' });
  }

  if (fileName) document.fileName = fileName;
  if (fileUrl) document.fileUrl = fileUrl;
  if (fileType) document.fileType = fileType;
  if (size) document.size = size;

  await workspace.save();
  res.status(200).json({ message: 'Document updated successfully', document });
});

// Delete a document
const deleteDocument = catchAsyncError(async (req, res) => {
  const { workspaceId, documentId } = req.params;

  const workspace = await VirtualSpace.findById(workspaceId);
  if (!workspace) {
    return res.status(404).json({ message: 'Workspace not found' });
  }

  const document = workspace.documents.id(documentId);
  if (!document) {
    return res.status(404).json({ message: 'Document not found' });
  }

  document.remove();
  await workspace.save();

  res.status(200).json({ message: 'Document deleted successfully' });
});

module.exports = {
  addDocument,
  getAllDocuments,
  getDocumentById,
  updateDocument,
  deleteDocument,
};
