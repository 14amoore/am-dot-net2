import React from 'react';
import { Location, Link } from '@reach/router';

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
    </section>
  );
}

export default Nav;
