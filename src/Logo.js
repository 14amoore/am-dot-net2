/* eslint-disable no-console */
import React from 'react';
import { Location, Link } from '@reach/router';
import bigLogo from './assets/AM_logo_FINAL_black.svg';
import littleLogo from './assets/AM_icon_FINAL_black.svg';

function Logo() {
  return (
    <Location>
      {({ location }) => {
        const gps = location.pathname;
        if (gps !== '/') {
          return (
            <div className="littleLogo">
              <Link to="/">
                <img src={littleLogo} alt="logo" />
              </Link>
            </div>
          );
        }
        return (
          <div className="logo">
            <img src={bigLogo} alt="logo" />
          </div>
        );
      }}
    </Location>
  );
}

export default Logo;
