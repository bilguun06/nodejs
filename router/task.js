const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/auth');

const router = express.Router();


router.post('/tasks', authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = new Task({
      title,
      description,
      userId: req.user._id
    });

    await task.save();

    res.json({ message: 'Task created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;



router.get('/tasks', authMiddleware, async (req, res) => {
    try {
      const tasks = await Task.find({ userId: req.user._id });
  
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  module.exports = router;
  
