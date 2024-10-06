import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

// Define the sections to observe
const sections = ['home', 'about', 'services', 'testimonials', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Use IntersectionObserver to detect the current section in view
  useEffect(() => {
    const observerOptions = {
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section when it enters view
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      // Clean up the observer when the component unmounts
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" onClick={handleLinkClick}>
          <img src={logo} alt="WebsolServices" />
        </a>
      </div>
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={handleLinkClick}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize */}
            </a>
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'line open' : 'line'}></span>
        <span className={isOpen ? 'line open' : 'line'}></span>
        <span className={isOpen ? 'line open' : 'line'}></span>
      </div>
    </nav>
  );
};

export default Navbar;
