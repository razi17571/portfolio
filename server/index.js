const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bodyParser = require('body-parser');
const {PORT} = require("./config/config");
const {connectDB} = require("./config/db");

const experienceRoutes = require('./routes/experienceRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/experiences', experienceRoutes);
app.use('/projects', projectRoutes);
app.use('/skills', skillRoutes);
app.use('/blogs', blogRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my portfolio API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
