import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./screens/HomePage";
import ServicesPage from "./screens/Services";
import CertificatePage from "./screens/Certificates";
import ContactusPage from "./screens/Contactus";
import CareersPage from "./screens/Careers";
import AboutUsPage from "./screens/Aboutus"
import FloatingButton from "./components/FloatingButton";
import Preloader from "./components/Preloader";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 3000); // Set delay time as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
     <Router>
      <div>
        {loading ? ( 
          <Preloader />
        ) : (
          <>
            <Navbar />
            <FloatingButton />
            <Routes>
              <Route path="/certificates" element={<CertificatePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/contactus" element={<ContactusPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;