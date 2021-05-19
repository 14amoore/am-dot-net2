import React from 'react';
import Footer from './Footer';
import cav3 from './assets/closetCav3.jpg';

function Cav() {
  return (
    <div>
      <section className="projectBody">
        <h1 id="title">Closet Cav</h1>
        <div className="picContainer">
          <img src={cav3} alt="cav shot" className="staticPic" />
        </div>
        <h1>How I Made This:</h1>
        <h3>
          <p>
            Closet Cav was made using Node.js, Reach Router, Firebase, React,
            and React Bootstrap. Users are authenticated using email and
            password. I chose firebase because it is a realtime database that my
            partner and I can access at the same time, when one of us adds or
            deletes a bottle these changes happen immediately. I chose react and
            react bootstrap due to their functionality, and popularity within
            the front-end development industry.
          </p>
        </h3>
        <h1>Why I Made This:</h1>
        <h3>
          <p>
            Closet Cav was developed to show and keep track of the wine
            currently in my coat closet by looking at our phones or computers.
            We needed to be able to enter and delete wines from inventory, and
            search for wines based on color/style, or country of origin.
          </p>
          <p>
            This app was created for the use my partner and I, and also as a
            proof of concept project to be shown to other members of the food
            and drink industry for further UX research.
          </p>
          <p>
            This project started out with a simple complaint. “Why is it that I
            never know exactly what’s in the back of the closet?” this is a
            complaint similar to that of many small children. While children are
            haunted by the specter of creatures lurking in the dark, my partner
            was annoyed at not knowing what bottle of wine might be forgotten in
            the dark. This complaint was the perfect opportunity to make a full
            stack web app that could answer this question in a simple and user
            friendly way.
          </p>
          <p>
            Click&nbsp;
            <a className="underline" href="https://closet-cav.web.app/">
              here
            </a>
            &nbsp;to have a look for yourself. Log in with the email:
            guest@me.com, and use the password: 123456. Guests are only able to
            browse and filter the collection. If you would like to see the code
            for this project, you can see it&nbsp;
            <a
              className="underline"
              href="https://github.com/14amoore/closetCav"
            >
              here
            </a>
            .
          </p>
        </h3>
      </section>
      <Footer />
    </div>
  );
}

export default Cav;
