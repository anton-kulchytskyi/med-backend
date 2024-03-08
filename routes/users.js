const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET /users/:userId
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error getting User:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /users
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

module.exports = router;