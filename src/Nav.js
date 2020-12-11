import React from 'react';
// import  from 'react';
import { Location, Link } from '@reach/router';
import { CSSTransitionGroup } from 'react-transition-group';

function Nav() {
  return (
    <section className="nav">
      <CSSTransitionGroup
        transitionName="test"
        // eslint-disable-next-line react/jsx-boolean-value
        transitionAppear={true}
        transitionAppearTimeout={750}
        transitionEnterTimeout={750}
        transitionLeaveTimeout={750}
      >
        <Location>
          {({ location }) => {
            const gps = location.pathname;
            if (gps !== '/') {
              return (
                <ul>
                  <Link to="/aboutme">
                    <li>About Me</li>
                  </Link>
                  <li>
                    <a href="https://github.com/14amoore">GitHub</a>
                  </li>
                  <Link to="/">
                    <li>Back</li>
                  </Link>
                </ul>
              );
            }
            return (
              <ul>
                <Link to="/aboutme">
                  <li>About Me</li>
                </Link>
                <li>
                  <a href="https://github.com/14amoore">GitHub</a>
                </li>
              </ul>
            );
          }}
        </Location>
      </CSSTransitionGroup>
    </section>
  );
}

export default Nav;
