import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Contact.css';

import contactvector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import web from './../../assets/web.png';
const Contact = () => {
    return (
        <div className="section-container">
            <Header
                heading='Get in touch.'
                details='Feel free to drop me an email to contact.'
            />
            <div className="contact-form-container">
                <form
                    className="contact-form"
                    action="https://formspree.io/f/meqvvlrq"
                    method="POST"
                >
                    {/*email container*/}
                    <input
                        type="email"
                        placeholder="Your Email ID"
                        name="_replyto"
                        className="input-box email-input"
                        autoComplete="on"
                    />
                    {/*Email body*/}
                    <textarea
                        type="text"
                        placeholder="Your Message"
                        name="message"
                        className="input-box body-input"
                    />
                    {/* submit button */}
                    <button
                        type='submit'
                        className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>
            {/* social icons*/}
            <div className="social-icons-container">
                <a href="https://github.com/BhavyaPooja259" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/bhavya259/" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://instagram.com/bhavya_pooja_" className="social-icon">
                    <img src={instagram} alt="social" />
                </a>
                <a href="https://bhavyapooja259.github.io/portfolio/" className="social-icon">
                    <img src={web} alt="social" />
                </a>
            </div>
            <Footer
                phrase="Read more about me"
                toAddress='/about'
            />
            <div className="vector-frame">
                <img src={contactvector} alt="anime" className="about-vector" />
            </div>
        </div>
    );
};
export default Contact;