import React from 'react';
import './ContactUs.css';

const Contact = () => {
  const handleContactClick = () => {
    window.open('https://us14.list-manage.com/contact-form?u=62383a5c0fbd69428467f6a44&form_id=2829f545bb1fe73060a22710ab1837ac', '_blank'); // Replace with your actual Mailchimp form link
  };

  const handleConsultationClick = () => {
    window.open('http://eepurl.com/i0Vbjs'); // Replace with your consultation form link
  };

  return (
    <div id='contact' className="contact-page">
      <div className="buttons-container">
        <button className="contact-button" onClick={handleContactClick}>
          Contact Us
        </button>

        {/* Circle with "or" */}
        <div className="or-circle">or</div>

        <button className="consultation-button" onClick={handleConsultationClick}>
          Get a Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Contact;
