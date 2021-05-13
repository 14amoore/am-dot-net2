import React from 'react';
import { Location, Link } from '@reach/router';
import bigLogo from './assets/AM_logo_FINAL_black.svg';
import littleLogo from './assets/AM_icon_FINAL_black.svg';

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
                    <a
                      href="https://github.com/14amoore"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github
                    </a>
                  </li>
                  <Link to="/">
                    <li id="backButton" className="horizontalLi">
                      home
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <img className="littleLogo" src={littleLogo} alt="logo" />
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
                  <a
                    href="https://github.com/14amoore"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                </li>
                <li>
                  <img id="bigLogo" src={bigLogo} alt="logo" />
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
