import React, { useState, useEffect } from 'react';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';
import Intro from '../components/Intro';
import '../styles/Home.css'; 

const Home = () => {
  // State for typing effect
  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <SkillsSection />
            <ExperienceSection />
            <ProjectSection />
          </div>
          <div className="col-lg-3">
            <Intro />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
