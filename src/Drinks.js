import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import drink1 from './assets/drink1.jpg';
import drink2 from './assets/drink2.jpg';
import drink3 from './assets/drink3.jpg';
import drink4 from './assets/drink4.jpg';
import drink5 from './assets/drink5.jpg';
import drink6 from './assets/drink6.jpg';
import drink7 from './assets/drink7.jpg';
import drink8 from './assets/drink8.jpg';

const items = [
  <img src={drink1} alt="tweets" className="drinkPic" />,
  <img src={drink2} alt="tweets" className="drinkPic" />,
  <img src={drink3} alt="tweets" className="drinkPic" />,
  <img src={drink4} alt="tweets" className="drinkPic" />,
  <img src={drink5} alt="tweets" className="drinkPic" />,
  <img src={drink6} alt="tweets" className="drinkPic" />,
  <img src={drink7} alt="tweets" className="drinkPic" />,
  <img src={drink8} alt="tweets" className="drinkPic" />,
];

const Drinks = () => {
  return (
    <AliceCarousel
      responsive="responsive"
      animationType="slide"
      animationDuration={1000}
      autoPlay
      autoPlayInterval={1000}
      infinite
      items={items}
      disableDotsControls
      disableButtonsControls
    />
  );
};

export default Drinks;
