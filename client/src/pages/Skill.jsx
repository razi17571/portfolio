import React from 'react';
import '../styles/Skill.css'; // Assuming you have or will create a CSS file for styling

const Skill = () => {
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
      <h3>Skills</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <p>{skill.category}:</p>
            <ul>
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill; 