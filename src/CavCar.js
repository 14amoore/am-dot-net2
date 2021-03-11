import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import cav1 from './assets/closetCav1.jpg';
import cav2 from './assets/closetCav2.jpg';
import cav3 from './assets/closetCav3.jpg';

const items = [
  <img src={cav1} alt="cav shot" className="portfolioPic" />,
  <img src={cav2} alt="cav shot" className="portfolioPic" />,
  <img src={cav3} alt="cav shot" className="portfolioPic" />,
];

const CavShot = () => {
  return (
    <AliceCarousel
      responsive="responsive"
      animationType="slide"
      animationDuration={1000}
      autoPlay
      autoPlayInterval={1000}
      infinite
      items={items}
      disableDotsControls="true"
    />
  );
};

export default CavShot;
