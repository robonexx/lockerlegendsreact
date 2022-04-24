import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-main'>
      <Hero />
      {/* <div className='overlay'></div>
      <video autoPlay loop muted className='video-home'>
        <source src='/la.webm' type='video/webm' />
      </video>
      <section className='hero-wrapper'>
        <h3>Welcome to</h3>
        <h1 className='headline'>LOCKERLEGENDS</h1>

        <h1 className='sub-header'>
          OFFICIAL “LOCKING” PIONEERS WEBSITE of the street dance pioneers
        </h1>
      </section> */}

      <article className='home-article'>
        <h2>EDUCATE B4U RECREATE</h2>
        <h3>
          OVER 15 years Lockerlegends have served your Locking educational need
        </h3>
        <br />
        <p>
          THE ART-FORM & CULTURE OF A STREET DANCE IS MUCH MORE THAN THE MOVES
          THAT CREATE THE DANCE ITSELF. <br /> THE ORIGINAL DANCE STYLE CALLED
          LOCKING HAS DEEP ROOTS WITHIN A ERA, WHICH MENT SO MUCH TO THE UNITY
          AND DE SEGREGATION OF A PEOPLE… READ… LEARN and understand what
          brought about the evolution of words like soul and funk.. <br />
          <br />
          Understand the DANCERS that contributed to the Original foundation of
          this dance & opened the door to what exist today as <br />
          <br /> “THE STREET DANCE OF LOCKING” <br />
          <br />
          Help us solidify this from just a dance into a ART-FORM to be passed
          down to future generations ! we have spent many hours & helped many
          along the way & now would ask all who have benefitted & enjoyed our
          site to take a few moments post a comment, about what the site has
          meant to you on our Facebook Group Page. <br />- join our
          Lockerlegends Facebook page
          <Link
            className='fb-page-link'
            to={{ pathname: 'https://www.facebook.com/groups/158481954185947' }}
            target='_blank'
          >
            CLICK HERE
          </Link>
          <br />
          <br />
          Then just ask to join the Lockerlegends /Lockers United Group, we
          would love for you to share what you think about our website there.{' '}
          <br />
          <br />
          ENJOY THE WEBSITE!
        </p>
      </article>
    </div>
  );
};

export default Home;
