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
      <div className="projectContainer">
        <div className="projects">
          <Link to="/portfolio">
            <img className="photo1" src={website} alt="a speaker" />
            <h1 className="projectTitle">adamoore.net</h1>
          </Link>
          <Link to="/cav">
            <img className="photo1" src={wineGlass} alt="Wine Glass" />
            <h1 className="projectTitle">Closet Cav</h1>
          </Link>
          <Link to="/dbot">
            <img className="photo1" src={drink} alt="robot" />
            <h1 className="projectTitle">drinkBot</h1>
          </Link>
          <Link to="/cookies">
            <img className="photo1" src={volume} alt="sound" />
            <h1 className="projectTitle">Cookies & Chrome</h1>
          </Link>
          <ScrollingFooter />
        </div>
      </div>
    </section>
  );
}

export default Project;
