// src/components/Experience.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Experience.css';
import ExperienceCard from './ExperienceCard';  

// Temporary data for trial
const tempExperiences = [
  {
    title: "Software Developer at XYZ Corp",
    role: "Frontend Developer",
    techStack: ["React", "Redux", "JavaScript"],
    description: "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Junior Developer at ABC Inc",
    role: "Backend Developer",
    techStack: ["Node.js", "Express", "MongoDB"],
    description: "Assisted in the development of backend applications in Node.js, Express, and MongoDB for e-commerce sites.",
    image: "https://via.placeholder.com/150"
  }
];

const Experience = () => {
  const [experiences, setExperiences] = useState(tempExperiences); // Using tempExperiences for initial state

  useEffect(() => {
    // Commented out to use temporary data for trial
    // axios.get('/api/experiences')
    //   .then(response => {
    //     setExperiences(response.data);
    //   })
    //   .catch(error => {
    //     console.error('There was an error fetching the experiences!', error);
    //   });
  }, []);

  return (
    <div className="experience-page mt-1">
      <h4>Experience</h4>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div className="experience-box" key={index}>
            <ExperienceCard experience={experience}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;