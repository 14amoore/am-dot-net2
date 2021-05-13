import React from 'react';
import { Link } from '@reach/router';
import wineGlass from './assets/closet_cav_spot_FINAL.png';
import website from './assets/website_spot_FINAL.png';
import drink from './assets/drink_bot_spot_FINAL.png';
import volume from './assets/sound_spot_FINAL.png';
import ScrollingFooter from './Tick';

function Project() {
  return (
    <section>
      <div className="projects">
        <Link to="/portfolio">
          <div className="container">
            <img className="photo1" src={website} alt="a speaker" />
            <h1 className="centeredLink">adamoore.net</h1>
          </div>
        </Link>
        <Link to="/cav">
          <div className="container">
            <img className="photo1" src={wineGlass} alt="Wine Glass" />
            <h1 className="centeredLink">Closet Cav</h1>
          </div>
        </Link>
        <Link to="/dbot">
          <div className="container">
            <img className="photo1" src={drink} alt="robot" />
            <h1 className="centeredLink">drinkBot</h1>
          </div>
        </Link>
        <Link to="/cookies">
          <div className="container">
            <img className="photo1" src={volume} alt="sound" />
            <h1 className="centeredLink">Cookies & Chrome</h1>
          </div>
        </Link>
        <ScrollingFooter />
      </div>
    </section>
  );
}

export default Project;
