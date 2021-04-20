import React from 'react';
import { Location, Link } from '@reach/router';

function Footer() {
  return (
    <section>
      <Location>
        {({ location }) => {
          const gps = location.pathname;
          console.log(gps);
        }}
      </Location>
      <h1>
        <div className="foot">
          <ul className="horizUl">
            <Link to="/">
              <li className="horizontalLi cent">Previous Project</li>
            </Link>
            <Link to="/cav">
              <li className="horizontalLi cent">Next Project</li>
            </Link>
          </ul>
        </div>
      </h1>
      ;
    </section>
  );
}

export default Footer;
