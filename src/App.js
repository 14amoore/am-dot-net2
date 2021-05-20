import React from 'react';
import { Router } from '@reach/router';
import ScrollTop from './ScrollTop';
import Nav2 from './Nav2';
import Project from './Project';
import Portfolio from './Portfolio';
import Cookies from './Cookies';
import Cav from './Cav';
import Dbot from './Dbot';
import AboutMe from './Aboutme';

function App() {
  return (
    <main className="App">
      <Nav2 />
      <Router primary={false}>
        <ScrollTop path="/">
          <Project path="/" />
          <AboutMe path="/aboutme" />
          <Portfolio path="/portfolio" />
          <Cav path="/cav" />
          <Dbot path="/dbot" />
          <Cookies path="/cookies" />
        </ScrollTop>
      </Router>
    </main>
  );
}

export default App;
