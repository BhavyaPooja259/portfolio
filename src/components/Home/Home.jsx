import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import homeanime from './../../assets/home_anime.gif';

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className="header-text">
                    <h1>Welcome to my portfolio</h1>
                    <p>This is Bhavya, a Student</p>
                </div>
                <div className='head-btns'>
                    <Link to='/about' className='btn btn-white'>
                        <div className="btn-text">Know more about me</div>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent'>
                        <div className="btn-text">Connect with me</div>
                    </Link>
                </div>
                <div className="splash-image">
                    <img src={homeanime} alt="animation" className='home-anime'></img>
                </div>
            </div>
        );
    }
}
export default Home;