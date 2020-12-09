import React from 'react';
import { Link } from '@reach/router';
import speaker from './assets/speaker.jpeg';
import robby from './assets/robby3.jpg';
import waveform from './assets/waveForm.png';
import redBlend from './assets/redBlend.webp';

function Project() {
  return (
    <section className="projects">
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo1" src={speaker} alt="a speaker" />
        </div>
        <div className="projText">
          <Link to="/cookies">
            <h1 className="item link">Cookies&Chrome</h1>
          </Link>
          <h2 className="item">What does browsing sound like?</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo2" src={redBlend} alt="wine" />
        </div>
        <div>
          <Link to="/cav">
            <h1 className="item link">ClosetCav</h1>
          </Link>
          <h2 className="item">Do we have that?</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo3" src={robby} alt="robot" />
        </div>
        <div>
          <Link to="/dbot">
            <h1 className="item link">DrinkBot</h1>
          </Link>
          <h2 className="item">Who needs a drink?</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo4" src={waveform} alt="sound" />
        </div>
        <div>
          <Link to="/sonsoc">
            <h1 className="item link">SonifiedSocial</h1>
          </Link>
          <h2 className="item">What&apos;s the mood of Twitter?</h2>
        </div>
      </span>
    </section>
  );
}

export default Project;
