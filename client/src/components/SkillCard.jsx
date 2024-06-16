import React from "react";

const SkillCard = ({ skill }) => {
    return (
        <>
            <p>{skill.category}:</p>
            <ul>
                {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                ))}
            </ul>
        </>
    );
}
export default SkillCard;