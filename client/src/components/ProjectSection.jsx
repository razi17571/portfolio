// src/components/ProjectSection.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Project.css';
import ProjectCard from './ProjectCard';

// Placeholder data for tempExperiences
const tempProjects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      techStack: ["React", "CSS", "JavaScript"],
      image: "https://via.placeholder.com/150",
      projectLink: "https://example.com/myportfolio"
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "An e-commerce store built with React and Firebase, featuring user authentication, product listings, and a shopping cart.",
      techStack: ["React", "Firebase", "Stripe"],
      image: "https://via.placeholder.com/150",
      projectLink: "https://example.com/mystore"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management app to organize daily tasks with features like adding, deleting, and marking tasks as complete.",
      techStack: ["Vue", "Node.js", "Express"],
      image: "https://via.placeholder.com/150",
      projectLink: "https://example.com/mytaskapp"
    }
  ];

const ProjectSection = () => {
  // Assuming tempExperiences was meant to be placeholder data for projects
  const [projects, setProjects] = useState(tempProjects); // Renamed to projects for clarity

  useEffect(() => {
    // Uncomment and adjust the API call as necessary
    // axios.get('/api/projects') // Assuming the endpoint is for projects
    //   .then(response => {
    //     setProjects(response.data);
    //   })
    //   .catch(error => {
    //     console.error('There was an error fetching the projects!', error);
    //   });
  }, []);

  return (
    <div className="project-section">
      <h4>Projects</h4>
      <div className="project-container">
        {projects.map(project => (
          <div className="project-box" key={project.id}>
            <ProjectCard project={project}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;