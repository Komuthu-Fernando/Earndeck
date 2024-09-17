import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import Preloader from "./components/Preloader";


const HomePage = React.lazy(() => import("./screens/HomePage"));
const ServicesPage = React.lazy(() => import("./screens/Services"));
const CertificatePage = React.lazy(() => import("./screens/Certificates"));
const ContactusPage = React.lazy(() => import("./screens/Contactus"));
const CareersPage = React.lazy(() => import("./screens/Careers"));
const AboutUsPage = React.lazy(() => import("./screens/Aboutus"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <Router>
      {/* <div>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <FloatingButton />
            <Suspense fallback={<div>Loading...</div>}> 
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
      </div> */}
      <div>
          <>
            <Navbar />
            <FloatingButton />
            <Suspense fallback={<div>Loading...</div>}> 
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
      </div>
    </Router>
  );
}

export default App;
