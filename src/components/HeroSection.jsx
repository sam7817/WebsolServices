import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'react-typewriter-effect';
import './HeroSection.css';

const Hero = () => {
  const [fontSize, setFontSize] = useState('2rem');
  const heroRef = useRef(null);

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

  // Mouse move effect for background animation
  useEffect(() => {
    const heroElement = heroRef.current; // Store ref value in a variable

    const handleMouseMove = (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      const boundingRect = heroElement.getBoundingClientRect(); // Use stored value
      const xPos = mouseX - boundingRect.left;
      const yPos = mouseY - boundingRect.top;
      const gradX = (xPos / boundingRect.width) * 100;
      const gradY = (yPos / boundingRect.height) * 100;

      heroElement.style.background = `radial-gradient(circle at ${gradX}% ${gradY}%, rgba(0, 123, 255, 0.6), rgba(0, 0, 0, 0) 60%)`;
    };

    heroElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove); // Use stored value
    };
  }, []);

  return (
    <section id='home' className="hero" ref={heroRef}>
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
          <a href="http://eepurl.com/i0Vbjs" className="btn primary-btn">
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
