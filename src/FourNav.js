import React from 'react';
import { Link } from '@reach/router';
import littleLogo from './assets/AM_icon_FINAL_black.svg';

function FourNav() {
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
      <Link id="home" className="navEl" to="/">
        <span>home</span>
      </Link>
      <span id="littleLogo">
        <img src={littleLogo} alt="logo" />
      </span>
    </div>
  );
}

export default FourNav;
