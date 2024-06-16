import React from 'react';
import '../styles/Skill.css';
import SkillCard from './SkillCard';

const SkillSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Frameworks",
      items: ["ReactJS", "Bootstrap", "Tailwind CSS", "Material UI", "Node.js (Express)", "Flask"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "Thunder Client", "Jupyter Notebook", "VS Code"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "Course Work",
      items: ["OOP's", "DBMS"]
    }
  ];

  return (
    <div className="skills-section">
      <h4>Skills</h4>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <SkillCard skill={skill}/>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default SkillSection;