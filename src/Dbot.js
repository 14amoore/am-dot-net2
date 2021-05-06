import React from 'react';
import Drinks from './Drinks';
import Footer from './Footer';

function Dbot() {
  return (
    <div>
      <section className="projectBody">
        <h1 className="title">DrinkBot</h1>
        <div className="drinkGoRound">
          <Drinks />
        </div>
        <h1>How I Made This:</h1>
        <h3>
          <p>
            DrinkBot was made using&nbsp;
            <a className="underline" href="https://nodejs.org/en/">
              Node.js
            </a>
            ,&nbsp;
            <a
              className="underline"
              href="https://github.com/puppeteer/puppeteer#readme"
            >
              Puppeteer
            </a>
            &nbsp;and a lot of asynchronous Javascript. DrinkBot is deployed to
            a Heroku server. Every day at 5pm Eastern DrinkBot tweets out a new
            drink with it&apos;s title, description, a picture of the drink, and
            a link to the recipe.
          </p>
        </h3>
        <h1>Why I Made This:</h1>
        <h3>
          <p>
            DrinkBot is a continuation of earlier work and an effort to further
            challenge myself. My first bot simply tweeted out a type of bread
            from a list of breads from around the world. The list was taken from
            Wikipedia. BreadBot was one of the first pieces of software I wrote
            and since it was finished my abilities as a Developer have grown
            quite a lot.
          </p>
          <p>
            During the pandemic no one has been able to go to a bar until
            somewhat recently. Even now the experience is not one that everyone
            feels comfortable with. The only solution is to make drinks at home.
            Making a good drink is much harder than a good bartender makes it
            look, it takes pratice and skill.
          </p>
          <p>
            This is where drink bot comes in! All of the drinks DrinkBot is
            tweeting out come from Punch Drink&apos;s&nbsp;
            <a
              className="underline"
              href="https://punchdrink.com/recipe-archives/"
            >
              archive.
            </a>
            Within Punch&apos;s extensive archive are recipes created by the
            best bartenders in the world. What better way for people at home to
            learn to make a great cocktail?
          </p>
        </h3>
      </section>
      <Footer />
    </div>
  );
}

export default Dbot;
