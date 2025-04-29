const express = require('express');
const router = express.Router();
const {
  addDocument,
  getAllDocuments,
  getDocumentById,
  updateDocument,
  deleteDocument,
} = require('../../controllers/virtualspace/documentController');
const {isAuthenticatedFreelancer} = require("../../middlewares/Auth")

// Add a document to a workspace
router.post('/workspace/:workspaceId/user/:userId/document', isAuthenticatedFreelancer,addDocument);

// Get all documents in a workspace
router.get('/workspace/:workspaceId/documents',isAuthenticatedFreelancer, getAllDocuments);

// Get a specific document by its ID
router.get('/workspace/:workspaceId/document/:documentId',isAuthenticatedFreelancer, getDocumentById);

// Update a document's details
router.put('/workspace/:workspaceId/document/:documentId',isAuthenticatedFreelancer, updateDocument);

// Delete a document
router.delete('/workspace/:workspaceId/document/:documentId',isAuthenticatedFreelancer, deleteDocument);

module.exports = router;
