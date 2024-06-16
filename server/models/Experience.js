const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  role: String,
  techStack: [String],
  description: String,
  image: String,
});

module.exports = mongoose.model('Experience', experienceSchema);