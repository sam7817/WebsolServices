import React, { useState, useEffect } from 'react';
import Typewriter from 'react-typewriter-effect';
import './HeroSection.css';

const Hero = () => {
  const [fontSize, setFontSize] = useState('2rem');

  // Dynamically adjust font size based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setFontSize('1.2rem');
      } else if (window.innerWidth <= 768) {
        setFontSize('1.5rem');
      } else {
        setFontSize('2rem');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct size on load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id='home' className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to WebsolServices{' '}
        </h1>
        <div className="typewriter-container">
          <Typewriter
            textStyle={{
              fontFamily: 'Arial, sans-serif',
              color: '#007bff',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: fontSize, // Apply responsive font size here
            }}
            startDelay={100}
            cursorColor="#007bff"
            multiText={[
              'We Code Your Dreams Into Reality',
              'We Grow Your Business Online',
            ]}
            multiTextDelay={2000}
            typeSpeed={100}
            multiTextLoop
          />
        </div>
        <p className="hero-description">
          We specialize in software development and digital marketing to help businesses thrive online.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary-btn">
            Get a Free Consultation
          </a>
          <a href="#services" className="btn secondary-btn">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
