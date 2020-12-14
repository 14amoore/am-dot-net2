/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Ticker from 'react-ticker';
import './tick.css';

function rand(min, max) {
  const offset = min;
  const range = max - min + 1;
  const randomNumber = Math.floor(Math.random() * range) + offset;
  return randomNumber;
}

const whatImInto = [
  `What I'm Reading: The Years of Lyndon B. Johnson by Robert Caro.`,
  `What I'm Reading: Brother, I am Dying by Edwidge Danticat.`,
  `What I'm Streaming: Buffy The Vampire Slayer.`,
  `What I'm Streaming: The West Wing.`,
  `What I'm Streaming: Bob's Burgers.`,
  `What I'm Doing: Running.`,
  `What I'm Doing: Birdwatching.`,
  `What I'm Doing: Growing cacti.`,
  `What I'm Doing: Cycling.`,
  `What I'm Drinking: Miller High Life.`,
  `What I'm Drinking: Iced Coffee.`,
  `What I'm Cooking: Buttermilk Brined Chicken.`,
  `What I'm Cooking: Pork Shoulder in Salsa Verde.`,
];

const style = {
  backgroundColor: '#484848',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '40px',
  width: '100%',
};

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
};

function Footer() {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <Ticker offset="100%" speed={10}>
          {() => (
            <h3>
              {whatImInto[rand(0, whatImInto.length - 1)]}
              &nbsp;
            </h3>
          )}
        </Ticker>
      </div>
    </div>
  );
}

export default Footer;
