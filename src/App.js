import React from 'react';
import { Router } from '@reach/router';
import Logo from './Logo';
import Nav from './Nav';
import Project from './Project';
import Portfolio from './Portfolio';
import Cookies from './Cookies';
import Cav from './Cav';
import Dbot from './Dbot';
import AboutMe from './Aboutme';

function App() {
  return (
    <main className="App">
      <Logo />
      <Nav />
      <Router>
        <Project path="/" />
        <AboutMe path="/aboutme" />
        <Portfolio path="/portfolio" />
        <Cav path="/cav" />
        <Dbot path="/dbot" />
        <Cookies path="/cookies" />
      </Router>
    </main>
  );
}

export default App;
