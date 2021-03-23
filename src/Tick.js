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
  <span>
    <b>What I&apos;m Reading:</b>&nbsp; The Years of Lyndon B. Johnson by Robert
    Caro.&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Reading:</b>&nbsp;
    <span>Brother, I am Dying by Edwidge Danticat.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Streaming:</b>&nbsp;
    <span>Buffy The Vampire Slayer.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Streaming:</b>&nbsp;
    <span>The West Wing.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Streaming:</b>&nbsp;
    <span>Bob&apos;s Burgers.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Doing:</b>&nbsp;
    <span>Running.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Doing:</b>&nbsp;
    <span>Birdwatching.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Doing:</b>&nbsp;
    <span>Growing Cacti.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Doing:</b>&nbsp;
    <span>Cycling.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Drinking:</b>&nbsp;
    <span>Miller High Life.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Drinking:</b>&nbsp;
    <span>Iced Coffee.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Cooking:</b>&nbsp;
    <span>Buttermilk Brined Chicken.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Cooking:</b>&nbsp;
    <span>Pork Shoulder in Salsa Verde.</span>&nbsp;
  </span>,
];

// const style = {
//   backgroundColor: '#484848',
//   position: 'fixed',
//   left: '0',
//   bottom: '0',
//   height: '4vh',
//   width: '100%',
// };

// const phantom = {
//   display: 'block',
//   padding: '20px',
//   height: '60px',
//   width: '100%',
// };

function Footer() {
  return (
    <div>
      <div className="phantom" />
      <div className="tickerStyle">
        <Ticker offset="100%" speed={7}>
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
