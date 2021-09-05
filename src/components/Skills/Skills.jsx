import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Skills.css';
import SkillCard from './SkillCard';



import skillsvector from './../../assets/skills_vector.png';
import { skillList } from './../../assets/skillsData'
const Skills = () => {
    return (
        <div className="section-container">
            <Header
                heading="My Skills"
                details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
            />
            <div className="skill-card-container">
                {
                    skillList.map(i => {
                        const skillName = i.skillName;
                        const skillUrl = i.skillUrl;
                        return (
                            <SkillCard skillName={skillName} skillUrl={skillUrl} />
                        );
                    })
                }
            </div>

            <Footer
                phrase="Get in touch."
                toAddress='/contact'
            />
            <div className="skills-vector-frame">
                <img src={skillsvector} alt="background-image" className="skills-vector" />
            </div>
        </div>
    );
};

export default Skills;