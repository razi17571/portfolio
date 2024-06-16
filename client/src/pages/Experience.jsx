// src/components/Experience.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Experience.css';

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
    <div className="experience-page">
      <h3>Experience</h3>
      <div className="cards">
        {experiences.map((experience, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={experience.image} alt={experience.title} />
            </div>
            <div className="card-content">
              <p>{experience.title}</p> {/* Company Name */}
              <p>{experience.role}</p> {/* Role */}
              <p>{experience.techStack.join(', ')}</p> {/* Tech Stack */}
              <p>{experience.description}</p> {/* Description */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;