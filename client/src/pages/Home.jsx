import React, { useState, useEffect } from 'react';
import SkillsSection from '../components/SkillsSection';
// import ExperienceSection from '../components/ExperienceSection';
// import ProjectsSection from '../components/ProjectSection';
import '../styles/Home.css'; 

const Home = () => {
  // State for typing effect
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <SkillsSection />
            {/* <ExperienceSection /> */}
            {/* <ProjectsSection /> */}
          </div>
          <div className="col-lg-3">
            {/* <Intro /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
