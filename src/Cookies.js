import React from 'react';
import ReactPlayer from 'react-player/lazy';

function Cookies() {
  return (
    <section>
      <ReactPlayer
        url={[
          'https://soundcloud.com/adam-moore-629640215/sets/thesis-play-list',
        ]}
      />
    </section>
  );
}

export default Cookies;
