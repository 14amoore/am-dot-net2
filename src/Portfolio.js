import React from 'react';
import Site from './Site';

function Portfolio() {
  return (
    <section className="projectBody">
      <h1 className="title">adamoore.net Version 2.0</h1>
      <div className="drinkGoRound">
        <Site />
      </div>
      <h1>How I Made This:</h1>
      <h3>
        <p>
          The version of my Portfolio you&apos;re currently visiting was made
          using React.js. I made it as a way to showcase my React, JS and web
          design abilities. By using the component, and conditional rendering
          features of React the website changes based on the behavoir of users.
        </p>
      </h3>
      <h1>Why I Made This:</h1>
      <h3>
        <p>
          I made the first version of my protfilio site during my second year at
          Parsons. I was very taken with a movement within web desing called
          digital brutalism. There&apos;s a fair amount of writing about digital
          brutalism out there.&nbsp;
          <a
            className="underline"
            href="https://uxdesign.cc/why-you-should-care-about-digital-brutalism-fa0c82d60133"
          >
            Here&apos;s&nbsp;
          </a>
          a link to one piece that is a nice introduction if you&apos;re
          intersted.
        </p>
        <p>
          Digital brutalism is something I&apos;m still very much interested in,
          but I understand it&apos;s not to everyone&apos;s taste.
        </p>
        <p>
          <a
            className="underline"
            href="https://github.com/14amoore/am-dot-net2"
          >
            Here&apos;s
          </a>
          &nbsp;a link to the GitHub repo if you&apos;d like to take a look at
          the source code.
        </p>
      </h3>
    </section>
  );
}

export default Portfolio;
