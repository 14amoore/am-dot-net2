import React from 'react';
import { Location, Link } from '@reach/router';
import bigLogo from './assets/AM_logo_FINAL_black.svg';
import littleLogo from './assets/AM_icon_FINAL_black.svg';

function Nav2() {
  return (
    <section>
      <Location>
        {({ location }) => {
          const gps = location.pathname;
          if (gps !== '/') {
            return (
              <div className="nav">
                <Link id="me" className="navEl" to="/aboutme">
                  <span>about me</span>
                </Link>
                <span id="git" className="navEl">
                  <a
                    href="https://github.com/14amoore"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                </span>
                <Link id="home" className="navEl" to="/">
                  <span>home</span>
                </Link>
                <span id="littleLogo">
                  <img src={littleLogo} alt="logo" />
                </span>
              </div>
            );
          }
          if (window.innerWidth <= 700) {
            return (
              <div className="nav">
                <Link id="me" className="navEl" to="/aboutme">
                  <span id="meSpan">about me</span>
                </Link>
                <span id="git" className="navEl">
                  <a
                    href="https://github.com/14amoore"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                </span>
                <span className="navEl" id="mobileLogo">
                  <img src={littleLogo} alt="logo" />
                </span>
              </div>
            );
          }
          return (
            <div className="nav">
              <Link id="me" className="navEl" to="/aboutme">
                <span>about me</span>
              </Link>
              <span id="git" className="navEl">
                <a
                  href="https://github.com/14amoore"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </span>
              <span id="bigLogo" className="navEl">
                <img src={bigLogo} alt="logo" />
              </span>
            </div>
          );
        }}
      </Location>
    </section>
  );
}

export default Nav2;
