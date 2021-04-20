import React from 'react';
import { Location, Link } from '@reach/router';

function Footer() {
  return (
    <section>
      <Location>
        {({ location }) => {
          const gps = location.pathname;
          if (gps === '/portfolio') {
            return (
              <h1>
                <div className="foot">
                  <ul className="horizUl">
                    <Link to="/">
                      <li className="horizontalLi firstH">Home</li>
                    </Link>
                    <Link to="/cav">
                      <li className="horizontalLi next">Next</li>
                    </Link>
                  </ul>
                </div>
              </h1>
            );
          }
          if (gps === '/cav') {
            return (
              <h1>
                <div className="foot">
                  <ul className="horizUl">
                    <Link to="/portfolio">
                      <li className="horizontalLi prev">Previous</li>
                    </Link>
                    <Link to="/dbot">
                      <li className="horizontalLi next">Next</li>
                    </Link>
                  </ul>
                </div>
              </h1>
            );
          }
          if (gps === '/dbot') {
            return (
              <h1>
                <div className="foot">
                  <ul className="horizUl">
                    <Link to="/cav">
                      <li className="horizontalLi prev">Previous</li>
                    </Link>
                    <Link to="/cookies">
                      <li className="horizontalLi next">Next</li>
                    </Link>
                  </ul>
                </div>
              </h1>
            );
          }
          return (
            <h1 className="footPos">
              <div className="foot">
                <ul className="horizUl">
                  <Link to="/cav">
                    <li className="horizontalLi prev">Previous</li>
                  </Link>
                  <Link to="/">
                    <li className="horizontalLi secondH">Home</li>
                  </Link>
                </ul>
              </div>
            </h1>
          );
        }}
      </Location>
    </section>
  );
}

export default Footer;
