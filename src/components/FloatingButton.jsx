import React from 'react';
import '../css/FloatingButton.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const FloatingButton = () => {
  const handleClick = () => {
    window.location.href = "mailto:earndeckshipping@gmail.com";
  };

  return (
    <div className="floating-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
      <span className="floating-button-text">Contact Us</span>
    </div>
  );
};

export default FloatingButton;
