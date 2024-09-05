// Preloader.js
import React from 'react';
import '../css/Preloader.css'; 
import Logo from '../assets/logo.png';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-logo-container">
        <img src={Logo} alt="Logo" className="preloader-logo" />
      </div>
    </div>
  );
}

export default Preloader;
