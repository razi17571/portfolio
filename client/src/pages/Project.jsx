import React from 'react';
import '../styles/ProjectCard.css'; // Assuming the CSS file is named ProjectCard.css
const project = {
    name: "My Awesome Project",
    imageUrl: "https://via.placeholder.com/150",
    techStack: ["React", "Node.js", "MongoDB"],
    description: "This is a brief description of my awesome project, showcasing my skills in full-stack development.",
    hostedUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/yourprojectrepo",
    blogUrl: "https://blog.example.com/post-about-my-project"
  };

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageUrl} alt={project.name} />
      </div>
      <div className="project-info">
        <h3>{project.name}</h3>
        <p className="tech-stack">{project.techStack.join(', ')}</p>
        <p className="description">{project.description}</p>    
        <div className="icons">
          {project.hostedUrl && <a href={project.hostedUrl} target="_blank" rel="noopener noreferrer">Hosted</a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {project.blogUrl && <a href={project.blogUrl} target="_blank" rel="noopener noreferrer">Blog</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;