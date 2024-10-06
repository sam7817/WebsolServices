import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
