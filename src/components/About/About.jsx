import React from 'react';
import './About.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import vectorimage from './../../assets/about_vector.png';
import aboutanime from './../../assets/about_anime.gif'
const About = () => {
    return (
        <div className="section-container">
            <Header
                heading="About Me."
                details="Student | Programmer | Web developer | Lifelong learner"
            />
            <div className="about-main">
                <div className="about-main-left">
                    {/* sub-section 1*/}
                    <div className="about-sub-head">
                        <h2>Hi there, I am Bhavya!</h2>
                    </div>
                    <p className="about-details">
                        I am a Student at R.M.D Engineering College currently pursuing Bachelor of Engineering.

                    </p>
                    <p className="about-details">
                        I am a self-motivated student aspiring to gain knowledge through real-time experience and exposure. I am a driven individual with the ability to adapt to any situation and proven potential to grow self and others. Well-versed in Data Structures and Algorithms and along with the implementation in real-time projects.{' '}

                    </p>


                </div>
                <div className="about-main-right">
                    <img
                        src={aboutanime}
                        alt="animation"
                        className="about-anime"
                    />
                </div>
            </div>
            <Footer
                phrase="check out my Projects!"
                toAddress="/projects"
            />
            {/*background design image*/}
            <div className="vector-frame">
                <img src={vectorimage} className="about-vector" alt="about" />
            </div>

        </div>
    );
};

export default About;