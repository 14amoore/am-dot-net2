import React from 'react';
import { Router } from '@reach/router';
// import PropTypes from 'prop-types';
import Nav from './Nav';
// import Nav2 from './Nav2';
import Project from './Project';
import Cookies from './Cookies';
import Cav from './Cav';
import Dbot from './Dbot';
import Sonsoc from './SonSoc';
import AboutMe from './Aboutme';
// import logo from './assets/logo.svg';
// import './App.css';

function App() {
  return (
    <main className="App">
      <Nav />
      <Router>
        <Project path="/" />
        <AboutMe path="/aboutme" />
        <Cookies path="/cookies" />
        <Cav path="/cav" />
        <Dbot path="/dbot" />
        <Sonsoc path="/sonsoc" />
      </Router>
    </main>
  );
}

export default App;
