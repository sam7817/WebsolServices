import React, { useEffect, useState } from 'react';
import './Testimonial.css';

const testimonialsData = [
    {
        id: 1,
        text: "WebsolServices helped us transform our online presence. Their dedication and expertise are unmatched!",
        author: "John Doe, CEO of Company A"
    },
    {
        id: 2,
        text: "The team at WebsolServices delivered our project on time and exceeded our expectations. Highly recommended!",
        author: "Jane Smith, Marketing Director of Company B"
    },
    {
        id: 3,
        text: "We saw a significant increase in our website traffic after implementing their digital marketing strategies. Fantastic service!",
        author: "Mike Johnson, Founder of Company C"
    },
    {
        id: 4,
        text: "Their software solutions are innovative and tailored to our specific needs. We couldn't be happier!",
        author: "Emily Davis, COO of Company D"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    return (
        <div id='testimonials' className="testimonials-section">
            <div className="container">
                <h1>What Our Clients Say</h1>
                <div className="testimonial-item">
                    <p>"{testimonialsData[currentIndex].text}"</p>
                    <h3>- {testimonialsData[currentIndex].author}</h3>
                </div>

                <div className="testimonial-navigation">
                    <button className="prev-button" onClick={handlePrev}>❮</button>
                    <div className="dots">
                        {testimonialsData.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                    <button className="next-button" onClick={handleNext}>❯</button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
