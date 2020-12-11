import React, { useState } from 'react';
// import  from 'react';
import { Link } from '@reach/router';
import { CSSTransition } from 'react-transition-group';

function Nav2() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className="nav">
      <CSSTransition in={isVisible} timeout={500} classNames="sample">
        <ul>
          <Link to="/aboutme">
            <li>
              <button type="button" onClick={() => setIsVisible(!isVisible)}>
                About Me
              </button>
            </li>
          </Link>
          <li>
            <a href="https://github.com/14amoore">GitHub</a>
          </li>
          <Link to="/">
            <li>Back</li>
          </Link>
        </ul>
      </CSSTransition>
    </section>
  );
}

export default Nav2;
