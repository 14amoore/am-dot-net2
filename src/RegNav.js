import React from 'react';
import { Link } from '@reach/router';
import bigLogo from './assets/AM_logo_FINAL_black.svg';

function RegNav() {
  return (
    <div className="nav">
      <Link id="me" className="navEl" to="/aboutme">
        <span>about me</span>
      </Link>
      <span id="git" className="navEl">
        <a href="https://github.com/14amoore" target="_blank" rel="noreferrer">
          github
        </a>
      </span>
      <span id="bigLogo" className="navEl">
        <img src={bigLogo} alt="logo" />
      </span>
    </div>
  );
}

export default RegNav;
