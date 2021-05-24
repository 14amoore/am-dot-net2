import React from 'react';
import { Link } from '@reach/router';
import littleLogo from './assets/AM_icon_FINAL_black.svg';

function MobileNav() {
  return (
    <div className="nav">
      <Link id="me" className="navEl" to="/aboutme">
        <span id="meSpan">about me</span>
      </Link>
      <span id="git" className="navEl">
        <a href="https://github.com/14amoore" target="_blank" rel="noreferrer">
          github
        </a>
      </span>
      <span className="navEl" id="mobileLogo">
        <img src={littleLogo} alt="logo" />
      </span>
    </div>
  );
}

export default MobileNav;
