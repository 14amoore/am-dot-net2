import React from 'react';
import ReactPlayer from 'react-player/lazy';

function Sonsoc() {
  return (
    <section className="headline">
      <h1>Sonified Social</h1>
      <ReactPlayer url="https://vimeo.com/490924047" className="player" />
      <h1>How I Made This:</h1>
      <h3>
        <p>
          This piece was made using Javascript, Node.js, and the Node packages
          Sentiment, Twit, Say, and Play-Sound. You can find the sourcecode in a
          GitHub repo by&nbsp;
          <a href="https://github.com/14amoore/ms2FinalTest10">clicking here</a>
          .
        </p>
      </h3>
      <h1>Why I Made This:</h1>
      <h3>
        <p>
          This project is an auditory interpretation of what I believe is
          actually happening on Twitter. It opens a live stream of Tweets, and
          then passes each tweet through sentiment analysis. The bird songs are
          triggered by their sentiment analysis score. A unique bird song is
          triggered for each value. A random 10% percent of all Tweets received
          are read by one of the five voices native to macintosh computers.
        </p>
        <p>
          Twitter is fundamentally misleading, Twitter claims to be a place for
          people to have conversations. What makes it misleading is that the
          interactions people are having on Twitter bear none of the hallmarks
          of conversation.
        </p>
        <p>
          The most obvious difference being that interactions on Twitter are not
          oral, they are mediated by the platform and read from screens. The
          interactions are not happening in real time. Tweets can be read and
          replied to years after they are sent out into the world.
        </p>
        <p>
          The conversations are not held between discrete parties. A person
          posting a tweet has no idea who will eventually read this tweet, they
          have even less certainty who will respond to it if anyone. The
          interactions happening on Twitter are more akin to bird song in the
          sense that they are functional communication rather than
          conversational communication.
        </p>
      </h3>
    </section>
  );
}

export default Sonsoc;
