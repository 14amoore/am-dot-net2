import React, { useEffect, useState } from 'react';
import { Location } from '@reach/router';
import FourNav from './FourNav';
import MobileNav from './MobileNav';
import RegNav from './RegNav';

function Nav2() {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimension({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <section>
      <Location>
        {({ location }) => {
          const gps = location.pathname;
          if (gps !== '/') {
            return <FourNav />;
          }
          if (dimension.width <= 640) {
            return <MobileNav />;
          }
          return <RegNav />;
        }}
      </Location>
    </section>
  );
}

export default Nav2;
