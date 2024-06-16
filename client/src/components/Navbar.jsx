import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactMeModal';
import '../styles/Navbar.css';
// Assuming FontAwesome is installed via npm package or you can include the CDN link in your public/index.html

const Navbar = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsContactModalOpen(!isContactModalOpen);
  };
  return (
    <>
    <nav className="navbar">
      <div className="navbrand">MRA</div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><a href="/contact" onClick={toggleContactModal}>Contact Me</a></li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="https://github.com/razi17571"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/mohammedraziullahansari/"><i className="fab fa-linkedin"></i></a>
        <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
        {/* LeetCode */}
        <a href="https://leetcode.com/u/Mohammed_Raziullah_Ansari/" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i> </a>
        {/* GeeksforGeeks */}
        <a href="https://www.geeksforgeeks.org/user/mohammedraziullahansari/" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i> </a>
        {/* CodeChef */}
        <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i></a>
      </div>
    </nav>
    {isContactModalOpen && <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />}
    </>
  );
};

export default Navbar;