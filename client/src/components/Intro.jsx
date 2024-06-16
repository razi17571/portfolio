import React, { useState, useEffect } from "react";
import '../styles/Intro.css'

const Intro = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "I'm Mohammed Raziullah Ansari";

  // Typing effect simulation
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Adjust typing speed here (milliseconds)
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="intro-section">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
        <div className="typing-effect">
          <p>{typedText}</p>
        </div>
        <div className="target-roles">
          MERN Stack Developer | 
            Frontend Developer | 
            Backend Developer |
            Python | Java Developer
        </div>
        <div className="intro">
          <p>
            Hello! I am Mohammed Raziullah Ansari, a passionate developer with experience
            in building web applications using various technologies. I enjoy solving
            complex problems and learning new technologies.
          </p>
        </div>
      </div>
    </>

  );
}
export default Intro;