import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './../Home/Home';
import Projects from './../Projects/Projects';
import Contact from './../Contact/Contact';
import About from './../About/About';
import Skills from './../Skills/Skills';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';
const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <NavBar />
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/projects' exact component={Projects} />
                    <Route path='/skills' exact component={Skills} />
                    <Route path='/contact' exact component={Contact} />
                    <GoHome />
                </div>
            </HashRouter>
        </div>
    );
};

export default App;