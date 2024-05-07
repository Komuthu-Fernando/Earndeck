import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import '../css/TestimonialSlider.css';
import OwnerImage from '../assets/owner-image.jpg';
import Slider from 'react-slick';

function TestimonialSlider() {
    // Assuming testimonial data is available in an array
    const testimonials = [
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    );
}

export default TestimonialSlider;
