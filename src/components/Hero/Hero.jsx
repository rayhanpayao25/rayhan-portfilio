import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Hi, I am Rayhan</h1>
        <p>
          Welcome to my little corner of the web. I’m a front-end developer, and I’m all about turning ideas into interactive,
          fun, and beautiful websites. I'm here to make your web experience something special. Take a look around, explore, 
          and feel free to reach out if you want to create something awesome together!
        </p>
        {/* Use Link to navigate to "/hire" route in the same tab */}
        <Link to="/blogpost" className="btn">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
