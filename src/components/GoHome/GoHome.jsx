import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './GoHome.css';

import homewhite from './../../assets/home_white.png';
import homeblack from './../../assets/home_black.png';

// to demonstrate programmatic navigation
class GoHome extends Component {
    navigateToHome = () => {
        const { history } = this.props;
        history.push('/');
    }
    render() {
        const { location } = this.props;
        const whitebtn = location.pathname === '/';
        return (
            <button
                className={`go-home-btn ${whitebtn ? 'white-bkg' : 'gradient-bkg'
                    } `}
                onClick={this.navigateToHome}
            >
                <img
                    className="home-icon"
                    src={whitebtn ? homeblack : homewhite}
                    alt="home_icon"
                />
            </button>
        );
    }
}

export default withRouter(GoHome);