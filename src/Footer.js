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
              <div>
                <h1 className="foot">
                  <Link to="/">
                    <span className="home">Home</span>
                  </Link>
                  <Link to="/cav">
                    <span className="cav">Next</span>
                  </Link>
                </h1>
              </div>
            );
          }
          if (gps === '/cav') {
            return (
              <div>
                <h1 className="foot">
                  <Link to="/portfolio">
                    <span className="port">Previous</span>
                  </Link>
                  <Link to="/dbot">
                    <span className="drink">Next</span>
                  </Link>
                </h1>
              </div>
            );
          }
          if (gps === '/dbot') {
            return (
              <div>
                <h1 className="foot">
                  <Link to="/cav">
                    <span className="prev">Previous</span>
                  </Link>
                  <Link to="/cookies">
                    <span className="cooks">Next</span>
                  </Link>
                </h1>
              </div>
            );
          }
          return (
            <div>
              <h1 className="foot">
                <Link to="/cav">
                  <span className="last1">Previous</span>
                </Link>
                <Link to="/">
                  <span className="last2">Home</span>
                </Link>
              </h1>
            </div>
          );
        }}
      </Location>
    </section>
  );
}

export default Footer;
