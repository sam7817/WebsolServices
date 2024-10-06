import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id='about' className="about-us-section">
            <div className="container">
                <div className="about-header">
                    <h1>About WebsolServices</h1>
                    <p>Delivering success through innovation in software development and digital marketing.</p>
                </div>

                <div className="about-content">
                    <div className="about-block">
                        <h2>Our Mission</h2>
                        <p>To empower client businesses through innovative software development and digital marketing strategies that drive growth and success.</p>
                    </div>

                    <div className="about-block">
                        <h2>Our Vision</h2>
                        <p>To become the world's leading software development and digital marketing company, recognized for transforming businesses worldwide.</p>
                    </div>

                    <div className="about-block">
                        <h2>Our Core Values</h2>
                        <ul>
                            <li><strong>Innovation:</strong> Driving creative and technology-driven solutions.</li>
                            <li><strong>Customer Satisfaction:</strong> Exceeding client expectations with every project.</li>
                            <li><strong>Integrity:</strong> Honesty and transparency in every aspect of our business.</li>
                            <li><strong>Commitment:</strong> Delivering on our promises to ensure client success.</li>
                        </ul>
                    </div>

                    <div className="about-block">
                        <h2>Our Story</h2>
                        <p>Founded with a vision to bridge the gap between business goals and technology solutions, WebsolServices has consistently delivered tailored software and digital marketing solutions. We prioritize innovation, creativity, and customer satisfaction, building a reputation for excellence in every service we offer.</p>
                    </div>

                    <div className="about-block">
                        <h2>Meet Our Team</h2>
                        <p>Our talented team consists of experienced software developers, web developers, digital marketers, video editors, and graphic designers who work tirelessly to ensure the success of our clients.</p>
                    </div>

                    <div className="about-block">
                        <h2>Why Choose Us?</h2>
                        <p>We stand apart by offering comprehensive services that merge cutting-edge technology with marketing expertise. Our unique selling point lies in our ability to provide end-to-end solutions that help businesses grow and achieve their goals.</p>
                    </div>

                    <div className="about-block">
                        <h2>Our Future Plans</h2>
                        <p>We are expanding into SaaS solutions, with products like keyword research tools, lead generation tools, and more, designed to optimize business operations and help our clients stay ahead of the competition.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
