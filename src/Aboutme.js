import React from 'react';
import me from './assets/jTree.JPG';

const AboutMe = () => {
  return (
    <section className="projectBody">
      <h1 className="title">Hi!</h1>
      <img src={me} alt="Hi!" className="staticPic" />
      <h3>
        <p>
          My name is Adam Moore. I&apos;m a UX Engineer, with an MFA from the
          Design & Technology department at Parsons School of Design.
        </p>
        <p>
          I&apos;m currently working as a product designer, UX designer, and
          frontend developer. Here&apos;s a link to&nbsp;
          <a
            className="underline"
            href="https://www.linkedin.com/in/adamoore14/"
          >
            my LinkedIn profile
          </a>
          &nbsp;in case you&apos;d like to see that. You can email me @&nbsp;
          <a
            href="mailto:adamoore@gmail.com?Subject=Hi!"
            target="_top"
            className="underline"
          >
            adamoore@gmail.com
          </a>
          .
        </p>
      </h3>
    </section>
  );
};

export default AboutMe;
