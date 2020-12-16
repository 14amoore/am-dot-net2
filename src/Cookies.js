/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactPlayer from 'react-player/lazy';

function Cookies() {
  return (
    <section className="headline">
      <h1>A Generative Composition for Cookies and Chrome</h1>
      <ReactPlayer
        className="player"
        url={[
          'https://soundcloud.com/adam-moore-629640215/sets/thesis-play-list',
        ]}
      />
      <div>
        <h1>How I Made This:</h1>
        <h3>
          <p>
            This Chrome extension, which can be downloaded by&nbsp;
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <a href="https://www.adamoore.net/assets/AMooreThesis.zip">
              clicking here
            </a>
            , was made using a Javascript library called Tone.js, asynchronous
            Javascript, HTML, and CSS. I am deeply indebted Yotam Mann for
            making Tone.js. You can checkout his work by{' '}
            <a href="https://yotammann.info/">clicking here</a>. If you&apos;d
            like to see the documentation for Tone.js, please{' '}
            <a href="https://tonejs.github.io/">click here</a>. If you would
            like to see the source code for this project it is in a GitHub repo,
            please <a href="https://github.com/14amoore/cook17">click here</a>.
            You can listen to prerecorded samples of the extension in the
            Soundcloud player above.
          </p>
        </h3>
        <h1>Why I Made This:</h1>
        <h3>
          <p>
            HTTP cookies are one of the building blocks of the modern internet.
            Cookies come to us from a time when computing memory was much more
            expensive than it is today. They were used to assist customers in
            keeping track of what was in their e-commerce shopping carts.
          </p>
          <p>
            Today the purpose of cookies has been almost completely inverted.
            Rather than helping people keep track of things they might like to
            buy, cookies have turned people into products tech companies might
            like to buy. The product sold is the data collected by cookies about
            user&apos;s browsing habits.
          </p>
          <p>
            As of now there is very little notification for users as to the
            purpose of the cookies being installed on their computers. The sheer
            number installed on a user&apos;s computer during an average
            browsing session can be staggering, with individual sites installing
            hundreds at a time. The aim of this extension is to use sound to
            alert users about the number, and some of the properties of the
            cookies being installed on user&apos;s computers. This extension is
            inteded to remedie this situation and give users of the Internet a
            new way to understand what, and who is a product on the Internet in
            2020.
          </p>
        </h3>
        <h1>Instructions for installation:</h1>
        <h3>
          <ol>
            <li className="instructions">
              Download the extension by{' '}
              <a href="https://www.adamoore.net/assets/AMooreThesis.zip">
                clicking here
              </a>
              .
            </li>
            <li className="instructions">
              The file you downloaded is compressed, so it must be decompressed.
              Double click on the file to do so. (The file most likely was
              placed in your downloads folder after it finished downloading, in
              case you can&apos;t find it.)
            </li>
            <li className="instructions">
              Now, open a new tab in chrome and type, chrome://extensions into
              chrome&apos;s navigation bar.
            </li>
            <li className="instructions">
              In the upper right hand corner toggle the slider &quot;Developer
              Mode&quot;.
            </li>
            <li className="instructions">
              In the upper lefthand corner click the button that says &quot;Load
              unpacked&quot;.
            </li>
            <li className="instructions">
              Click once on the uncompressed extension. Click
              &quot;select&quot;.
            </li>
            <li className="instructions">
              In the upper right hand corner of your browser there will be an
              icon with the letter &quot;A&quot;. Quit your browser, restart it,
              and click the &quot;A&quot; icon.
            </li>
            <li className="instructions">Enjoy!</li>
          </ol>
        </h3>
      </div>
    </section>
  );
}

export default Cookies;
