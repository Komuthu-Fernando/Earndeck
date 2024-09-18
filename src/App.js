import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import FloatingButton from "./components/FloatingButton";
import Preloader from "./components/Preloader";

import "./css/Fallback.css"

// Lazy-loaded pages
const HomePage = React.lazy(() => import("./screens/HomePage"));
const ServicesPage = React.lazy(() => import("./screens/Services"));
const CertificatePage = React.lazy(() => import("./screens/Certificates"));
const ContactusPage = React.lazy(() => import("./screens/Contactus"));
const CareersPage = React.lazy(() => import("./screens/Careers"));
const AboutUsPage = React.lazy(() => import("./screens/Aboutus"));
const Footer = React.lazy(() => import("./components/Footer"));

const FallbackLoader = () => (
  <div className="fallback-loading">
    <div className="spinner"></div>
    <div className="overlay"></div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 3000); 

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Suspense fallback={<FallbackLoader />}>
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
            </Suspense>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
