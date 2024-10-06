import React from 'react';
import Typewriter from 'react-typewriter-effect';
import './HeroSection.css';

const Hero = () => {
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
