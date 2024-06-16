const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  hostedLink: String,
  githubLink: String,
  blogLink: String,
  image: String,
});

module.exports = mongoose.model('Project', projectSchema);