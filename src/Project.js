import React from 'react';
import { Link } from '@reach/router';
// import Tick from './Tick';
import wineGlass from './assets/wine.svg';
import music from './assets/music.svg';
import skull from './assets/skull.svg';
import volume from './assets/volume-loud.svg';
import Footer from './Tick';

function Project() {
  return (
    <section className="projects">
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo1" src={music} alt="a speaker" />
        </div>
        <div className="projText">
          <Link to="/cookies">
            <h1 className="item link">Cookies&Chrome</h1>
          </Link>
          <h2 className="item subheading">What does browsing sound like?</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img src={wineGlass} alt="Wine Glass" />
        </div>
        <div>
          <Link to="/cav">
            <h1 className="item link">ClosetCav</h1>
          </Link>
          <h2 className="item subheading">Do we have that?</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo3" src={skull} alt="robot" />
        </div>
        <div>
          <Link to="/dbot">
            <h1 className="item link">DrinkBot</h1>
          </Link>
          <h2 className="item subheading">Who needs a drink?</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo4" src={volume} alt="sound" />
        </div>
        <div>
          <Link to="/sonsoc">
            <h1 className="item link">SonifiedSocial</h1>
          </Link>
          <h2 className="item subheading">What&apos;s the mood of Twitter?</h2>
        </div>
      </span>
      <Footer />
    </section>
  );
}

export default Project;
