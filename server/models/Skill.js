const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  percentage: Number,
  projects: [String],
  blogs: [String],
});

module.exports = mongoose.model('Skill', skillSchema);