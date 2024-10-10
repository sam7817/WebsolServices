import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div id='services' className="services-section">
            <div className="container">
                <div className="services-header">
                    <h1>Our Services</h1>
                    <p>Explore our comprehensive range of services designed to elevate your business.</p>
                </div>

                <div className="services-grid">
                    <div className="service-item">
                        <h2>Software Development</h2>
                        <p>Custom software solutions tailored to your business needs, enhancing efficiency and scalability.</p>
                    </div>

                    <div className="service-item">
                        <h2>Web Development</h2>
                        <p>Responsive, high-performance websites and e-commerce platforms designed to drive engagement.</p>
                    </div>

                    <div className="service-item">
                        <h2>Digital Marketing</h2>
                        <p>Comprehensive SEO, SEM, and SMM strategies to boost your online visibility and traffic.</p>
                    </div>

                    <div className="service-item">
                        <h2>E-commerce Management</h2>
                        <p>End-to-end management solutions to optimize your e-commerce business for success.</p>
                    </div>

                    <div className="service-item">
                        <h2>Graphic Design & Video Editing</h2>
                        <p>Creative design and video production services to enhance your brand identity and storytelling.</p>
                    </div>

                    <div className="service-item">
                        <h2>Copywriting & Research</h2>
                        <p>Compelling content creation and market research services to strengthen your message.</p>
                    </div>

                    <div className="service-item">
                        <h2>Custom Digital Services</h2>
                        <p>Tailored digital solutions built to address your unique business challenges and opportunities.</p>
                    </div>

                    <div className="service-item">
                        <h2>SaaS Products (Coming Soon)</h2>
                        <p>Innovative SaaS tools, including keyword research and lead generation, designed to drive business growth.</p>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Ready to Elevate Your Business?</h2>
                    <p>Contact us today to discover how our services can help you achieve your goals!</p>
                    <a href="http://eepurl.com/i0Vbjs" className="cta-button">Get a Free Consultation</a>
                </div>
            </div>
        </div>
    );
};

export default Services;
