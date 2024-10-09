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
                            <strong>Email:</strong> websolservices01@gmail.com<br />
                            <strong>Phone:</strong> +91 70378 60884<br />
                            <strong>Address:</strong> Rampur, Uttar Pradesh - 244901, India
                        </p>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/websolservices/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.facebook.com/WebsolServices" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/websolservices/" target="_blank" rel="noopener noreferrer">
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
