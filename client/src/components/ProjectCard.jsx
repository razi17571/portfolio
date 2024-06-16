import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <>
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
                <p>{project.title}</p>
                {/* <p>{project.description}</p>     */}
                <p>{project.techStack.join(', ')}</p>
            </div>
        </>
    );
}

export default ProjectCard;