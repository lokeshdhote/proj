const express = require('express');
const router = express.Router();
const Message = require("../models/MessageModel")

// Get all messages for a specific chat room
router.get('/messages/:chatRoom', async (req, res) => {
  try {
    const messages = await Message.find({ chatRoom: req.params.chatRoom });
res.status(201).json({ messages });
    console.log(messages+"msg");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new message
router.post('/messages', async (req, res) => {
  try {
    console.log(req.body+"routes");
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a message
router.put('/messages/:id', async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a message
router.delete('/messages/:id', async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;