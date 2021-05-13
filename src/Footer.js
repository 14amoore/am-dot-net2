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
                  <Link to="/">
                    <span className="lighterL">Home</span>
                  </Link>
                  <Link to="/cav">
                    <span className="lighterR">Next</span>
                  </Link>
                </div>
              </h1>
            );
          }
          if (gps === '/cav') {
            return (
              <h1>
                <div className="foot">
                  <Link to="/portfolio">
                    <span className="lighterL">Previous</span>
                  </Link>
                  <Link to="/dbot">
                    <span className="lighterR">Next</span>
                  </Link>
                </div>
              </h1>
            );
          }
          if (gps === '/dbot') {
            return (
              <h1>
                <div className="foot">
                  <Link to="/cav">
                    <span className="lighterL">Previous</span>
                  </Link>
                  <Link to="/cookies">
                    <span className="lighterR">Next</span>
                  </Link>
                </div>
              </h1>
            );
          }
          return (
            <h1 className="footPos">
              <div className="foot">
                <Link to="/cav">
                  <span className="lighterL">Previous</span>
                </Link>
                <Link to="/">
                  <span className="lighterR">Home</span>
                </Link>
              </div>
            </h1>
          );
        }}
      </Location>
    </section>
  );
}

export default Footer;
