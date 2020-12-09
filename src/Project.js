import React from 'react';
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
          <h1 className="item">Project 1</h1>
          <h2 className="item">Description</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo2" src={redBlend} alt="wine" />
        </div>
        <div>
          <h1 className="item">Project 2</h1>
          <h2>Description</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo3" src={robby} alt="robot" />
        </div>
        <div>
          <h1 className="item">Project 3</h1>
          <h2>Description</h2>
        </div>
      </span>
      <span className="proj container">
        <div className="imageDiv">
          <img className="photo4" src={waveform} alt="sound" />
        </div>
        <div>
          <h1 className="item">Project 4</h1>
          <h2>Description</h2>
        </div>
      </span>
    </section>
  );
}

export default Project;
