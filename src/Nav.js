import React from 'react';
import { Location, Link } from '@reach/router';
// import { CSSTransitionGroup } from 'react-transition-group';

function Nav() {
  return (
    <section className="nav">
      <Location>
        {({ location }) => {
          const gps = location.pathname;
          if (gps !== '/') {
            return (
              <ul>
                <Link to="/aboutme">
                  <li>about me</li>
                </Link>
                <li>
                  <a href="https://github.com/14amoore">github</a>
                </li>
                <Link to="/">
                  <li id="backButton">back</li>
                </Link>
              </ul>
            );
          }
          return (
            <ul>
              <Link to="/aboutme">
                <li>about me</li>
              </Link>
              <li>
                <a href="https://github.com/14amoore">github</a>
              </li>
              {/* <li id="noButton">Back</li> */}
            </ul>
          );
        }}
      </Location>
    </section>
  );
}

export default Nav;
