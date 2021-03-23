import React from 'react';
import { Location, Link } from '@reach/router';
// import { CSSTransitionGroup } from 'react-transition-group';

function Nav() {
  return (
    <section>
      <Location>
        {({ location }) => {
          const gps = location.pathname;
          if (gps !== '/') {
            return (
              <div className="nav">
                <ul className="horizUl">
                  <Link to="/aboutme">
                    <li className="horizontalLi">about me</li>
                  </Link>
                  <li className="horizontalLi">
                    <a href="https://github.com/14amoore">github</a>
                  </li>
                  <Link to="/">
                    <li id="backButton" className="horizontalLi">
                      back
                    </li>
                  </Link>
                </ul>
              </div>
            );
          }
          return (
            <div className="nav">
              <ul className="horizUl">
                <Link to="/aboutme">
                  <li className="horizontalLi">about me</li>
                </Link>
                <li className="horizontalLi">
                  <a href="https://github.com/14amoore">github</a>
                </li>
              </ul>
            </div>
          );
        }}
      </Location>
    </section>
  );
}

export default Nav;
