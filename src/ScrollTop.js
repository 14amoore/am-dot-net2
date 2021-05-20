import React from 'react';

function ScrollTop({ children, location }) {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
}

export default ScrollTop;
