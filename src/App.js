import React from 'react';
import Granim from 'react-granim';
import { Router } from '@reach/router';
import Nav from './Nav';
import Project from './Project';
import Cookies from './Cookies';
import Cav from './Cav';
import Dbot from './Dbot';
import Sonsoc from './SonSoc';
import AboutMe from './Aboutme';

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
      <Granim />
    </main>
  );
}

export default App;
