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
          using React.js. I made as a way to showcase my React, JS and web
          design abilities. By using the component, and conditional rendering
          features of React I was able to make a website that changes based on
          the behavoirs of users while keeping the code neat and organized.
        </p>
      </h3>
      <h1>Why I Made This:</h1>
      <h3>
        <p>
          I made the first version of my protfilio site during my second year at
          Parsons. I was very taken with a movement within web desing called
          digital brutalism out there. There&apos;s a fair amount of writing
          about digital brutalism.&nbsp;
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
          I made this website to showcase a more mainstream aesthetic, as well
          as my abilities to take advantage of the great tools made available by
          React. There&apos;s a GitHub repo,&nbsp;
          <a
            className="underline"
            href="https://github.com/14amoore/am-dot-net2"
          >
            here
          </a>
          &nbsp;if youd like to take a look at the source code.
        </p>
      </h3>
    </section>
  );
}

export default Portfolio;
