/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
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
    <b>What I&apos;m Reading:</b>&nbsp;
    <span>Il Gatopardo by Tomasi di Lampedusa.</span>&nbsp;
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
    <b>What I&apos;m Drinking:</b>&nbsp;
    <span>Miller High Life.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Drinking:</b>&nbsp;
    <span>Iced Coffee.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Drinking:</b>&nbsp;
    <span>so much water.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Cooking:</b>&nbsp;
    <span>Buttermilk Brined Chicken.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Cooking:</b>&nbsp;
    <span>Pork Shoulder in Salsa Verde.</span>&nbsp;
  </span>,
  <span>
    <b>What I&apos;m Cooking:</b>&nbsp;
    <span>West Indian Curried Lamb.</span>&nbsp;
  </span>,
];

function ScrollingFooter() {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimension({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  let tickSpeed = 7;
  if (dimension.width > 250 && dimension.width < 767) {
    tickSpeed = 4;
  } else if (dimension.width >= 768 && dimension.width < 1024) {
    tickSpeed = 6;
  } else if (dimension.width >= 1024 && dimension.width < 1800) {
    tickSpeed = 7;
  } else if (dimension.width >= 1800 && dimension.width < 2001) {
    tickSpeed = 8;
  } else {
    tickSpeed = 15;
  }
  return (
    <div>
      <div className="phantom" />
      <div className="tickerStyle">
        <Ticker offset="100%" speed={tickSpeed}>
          {() => (
            <h3 className="tickerContent">
              {whatImInto[rand(0, whatImInto.length - 1)]}
              &nbsp;
            </h3>
          )}
        </Ticker>
      </div>
    </div>
  );
}

export default ScrollingFooter;
