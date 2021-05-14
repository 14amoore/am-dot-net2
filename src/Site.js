import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import site1 from './assets/amDotNetv1.jpg';
import site2 from './assets/amDotNetv1-2.jpg';
import site3 from './assets/amDotNetv1-3.jpg';
import site4 from './assets/amDotNetv1-4.jpg';
import site5 from './assets/amDotNetv1-5.jpg';

const items = [
  <img src={site1} alt="site shot" className="portfolioPic" />,
  <img src={site2} alt="site shot" className="portfolioPic" />,
  <img src={site3} alt="site shot" className="portfolioPic" />,
  <img src={site4} alt="site shot" className="portfolioPic" />,
  <img src={site5} alt="site shot" className="portfolioPic" />,
];

const OldSite = () => {
  return (
    <AliceCarousel
      responsive="responsive"
      autoPlay
      animationDuration={1000}
      autoPlayInterval={1000}
      infinite
      // autoWidth="true"
      // autoHeight="true"
      disableDotsControls
      disableButtonsControls
      items={items}
    />
  );
};

export default OldSite;
