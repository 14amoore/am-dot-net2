import React from 'react';
import Drinks from './Drinks';

function Dbot() {
  return (
    <section className="drinks">
      <h1 className="title">DrinkBot</h1>
      <div className="drinkGoRound">
        <Drinks />
      </div>
      <h1>How I Made This:</h1>
      <h3>
        <p>
          DrinkBot was made using Node.js, Puppeteer, and a lot of asynchronous
          Javascript.
        </p>
      </h3>
      <h1>Why I Made This:</h1>
    </section>
  );
}

export default Dbot;
