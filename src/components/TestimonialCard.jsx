import React from 'react';
import '../css/TestimonialCard.css';

function TestimonialCard({ name, image, description }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-top">
                <h3 className="testimonial-name">{name}</h3>
                <div className="testimonial-image" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className="testimonial-description">{description}</div>
        </div>
    );
}

export default TestimonialCard;
