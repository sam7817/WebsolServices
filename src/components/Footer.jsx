import React from 'react';
import './Footer.css';
import logo from '../assets/favicon.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="WebsolServices Logo" />
                        <p>'We code your dreams into reality'.</p>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>
                            <strong>Email:</strong> info@websolservices.com<br />
                            <strong>Phone:</strong> +1 (234) 567-8900<br />
                            <strong>Address:</strong> 123 Main Street, City, Country
                        </p>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} WebsolServices. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
