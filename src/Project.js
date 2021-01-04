import React from 'react';
import { Link } from '@reach/router';
import wineGlass from './assets/wine.svg';
import music from './assets/music.svg';
import skull from './assets/skull.svg';
import volume from './assets/volume-loud.svg';
import Footer from './Tick';

function Project() {
  return (
    <section className="projects">
      <div className="proj container">
        <div className="imageDiv">
          <img className="photo1" src={music} alt="a speaker" />
        </div>
        <div className="projText">
          <Link to="/portfolio">
            <h1 className="item link">Adamoore.net</h1>
          </Link>
          <h2 className="item subheading">Why Am I Here?</h2>
        </div>
      </div>
      <div className="proj container">
        <div className="imageDiv">
          <img src={wineGlass} alt="Wine Glass" />
        </div>
        <div className="projText">
          <Link to="/cav">
            <h1 className="item link">Closet Cav</h1>
          </Link>
          <h2 className="item subheading">Do we have that?</h2>
        </div>
      </div>
      <div className="proj container">
        <div className="imageDiv">
          <img className="photo3" src={skull} alt="robot" />
        </div>
        <div className="projText">
          <Link to="/dbot">
            <h1 className="item link">Drink Bot</h1>
          </Link>
          <h2 className="item subheading">Who needs a drink?</h2>
        </div>
      </div>
      <div className="proj container">
        <div className="imageDiv">
          <img className="photo4" src={volume} alt="sound" />
        </div>
        <div className="projText">
          <Link to="/sonsoc">
            <h1 className="item link">Sound Work</h1>
          </Link>
          <h2 className="item subheading">What Can Sound Do For You?</h2>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Project;
