import React from 'react';
import './Skills.css';

const SkillCard = ({ skillName, skillUrl }) => {
    //console.log({ skillUrl });
    return (
        <div className="skill">
            <img src={skillUrl} alt="pic" />
            <p>{skillName}</p>
        </div>
    );
};
export default SkillCard;