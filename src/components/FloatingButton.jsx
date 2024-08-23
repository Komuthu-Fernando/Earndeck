import React from 'react';
import '../css/FloatingButton.css'; 

const FloatingButton = () => {
  const handleClick = () => {
    window.location.href = "mailto:contact@example.com";
  };

  return (
    <div className="floating-button" onClick={handleClick}>
      Contact Us
    </div>
  );
};

export default FloatingButton;
