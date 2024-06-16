// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Experience from './components/Experience';
// import Skill from './components/Skill';
// import Projects from './components/Projects';
// import Blogs from './components/Blogs';
// import Resume from './components/Resume';
// import Contact from './components/ContactModal';
// import './index.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skill />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
);

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
