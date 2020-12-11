import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
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
      <CSSTransitionGroup
        transitionName="test"
        // eslint-disable-next-line react/jsx-boolean-value
        transitionAppear={true}
        transitionAppearTimeout={750}
        transitionEnterTimeout={750}
        transitionLeaveTimeout={750}
      >
        <Router>
          <Project path="/" />
          <AboutMe path="/aboutme" />
          <Cookies path="/cookies" />
          <Cav path="/cav" />
          <Dbot path="/dbot" />
          <Sonsoc path="/sonsoc" />
        </Router>
      </CSSTransitionGroup>
    </main>
  );
}

export default App;
