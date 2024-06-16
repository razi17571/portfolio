const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

router.get('/', async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

module.exports = router;