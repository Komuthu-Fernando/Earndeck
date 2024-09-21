import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contactus.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ContactusPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapRef = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Lazy load the map using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setMapLoaded(true);
          observer.disconnect();  // Stop observing once map is loaded
        }
      });
    });
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vgisrpk', 'template_fg786yc', e.target, 'szCkEAWZ0v89zbRC1')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred. Please try again.');
        }
      );

    e.target.reset(); 
  };

  return (
    <div>
      <div className="content">
        <h1 className="heading">How can we help?</h1>
        <p className="paragraph">
          Looking to contact Earndeck Shipping? There's a few ways <br /> to do it based on your inquiry. Check out all<br />your options below
        </p>
        <div className="cardscontainer">

          <div className="card">
            <FaMapMarkerAlt className="icon" />
            <h3 className="title">Address</h3>
            <br />
            <p className="text">
              No. 5/5 Nagahawatha Road,<br />
              Wathtegedara,<br />
              Maharagama 10280
            </p>
          </div>


          <div className="card">
            <FaPhone className="icon" />
            <h3 className="title">Call us</h3>
            <p className="text">
              <b>+94 77 308 1208</b>
            </p>
            <br />
            <p className="text">
              Mail Hours:<br />
              Monday - Friday<br />
              8.30 a.m - 5.15 p.m
            </p>
          </div>


          <div className="card">
            <FaEnvelope className="icon" />
            <h3 className="title">Email us</h3>
            <p className="text">
              <div className='email-div'>
              <p><b>earndeckshipping@gmail.com</b></p>
              </div>
              
            </p>
            <br />
            <p className="text">Submit an email and we will get back to you soon</p>
          </div>
        </div>
        <br />
        <div className="contactContainer">
          <div className="contactForm-contact">
            <h2 className="formHeading">Get in Touch</h2>
            <form onSubmit={sendEmail}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
              <label htmlFor="inquiry">Inquiry/Message:</label>
              <textarea id="inquiry" name="inquiry" rows="4" cols="50" required></textarea>
                <button type="submit">Submit</button>

            </form>
          </div>
          <div className="mapLocator" ref={mapRef}>
          {mapLoaded ? (
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.087446857001!2d79.9224079!3d6.8527431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2511e7faf2ca5%3A0xf5d0a37d88161258!2sEarndeck%20Shipping%20(Pvt)%20Ltd!5e0!3m2!1sen!2sus!4v1625514475096!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          ) : (
            <p>Loading map...</p> // Placeholder until the map is loaded
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default ContactusPage;
