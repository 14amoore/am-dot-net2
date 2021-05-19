import React from 'react';
import OldSite from './Site';
import Footer from './Footer';

function Portfolio() {
  return (
    <div>
      <section className="projectBody">
        <h1 id="title">adamoore.net Version 2.0</h1>
        <div>
          <OldSite className="picContainer" />
        </div>
        <h1>How I Made This:</h1>
        <h3>
          <p>
            The version of my Portfolio you&apos;re currently visiting was made
            using React.js. I made it as a way to showcase my React, JS and web
            design abilities. By using the component, and conditional rendering
            features of React the website changes based on the behavoir of
            users.
          </p>
        </h3>
        <h1>Why I Made This:</h1>
        <h3>
          <p>
            I made the first version of my protfolio site during my second year
            at Parsons. At the time I was very taken with a movement within web
            design called digital brutalism. There&apos;s a fair amount of
            writing about digital brutalism out there.&nbsp;
            <a
              className="underline"
              href="https://uxdesign.cc/why-you-should-care-about-digital-brutalism-fa0c82d60133"
            >
              Here&apos;s&nbsp;
            </a>
            a link to one piece that is a nice introduction if you&apos;re
            interested.
          </p>
          <p>
            Digital brutalism is something I&apos;m still very much interested
            in, but I understand it&apos;s not to everyone&apos;s taste. After
            soliciting a lot of feedback from a diverse range of sources I began
            to see a theme in their critique. The critique boiled down to
            &quot;aesthetically the site is too unconventional, and it
            doesn&apos;t do your work the justice&quot;.
          </p>
          <p>
            Of course, feedback like this isn&apos;t the most fun to receive,
            but it is probably the most valuable. After all a portfolio should
            make one&apos;s work look as strong as possible. If the design of
            the portfolio is distracting users from the work itself then it
            needs to be redesigned.
          </p>
          <p>
            The fruits of my research, and days spent playing in figma have lead
            to this, adamoore.net V2.0. I do hope you like it, and that this
            portfolio opens a window into my creative process. If you have any
            feedback I&apos;d be delighted to hear it, V3.0 is not far off on
            the horizon. Please click next, take a look around.
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
      <Footer />
    </div>
  );
}

export default Portfolio;
