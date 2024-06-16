const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single experience by ID
router.get('/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (experience) {
      res.json(experience);
    } else {
      res.status(404).json({ message: 'Experience not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;