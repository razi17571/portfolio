import React from "react";
// import "../styles/ExperienceCard.css";

const ExperienceCard = ({ experience }) => {
    return (
        <>
            <div className="experience-image">
                <img src={experience.image} alt={experience.title} />
            </div>
            <div className="experience-content">
                <p>{experience.title}</p>
                <p>{experience.role}</p> 
                <p>{experience.techStack.join(', ')}</p> 
                {/* <p>{experience.description}</p>  */}
            </div>
        </>
    );
}

export default ExperienceCard;