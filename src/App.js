import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './index.css'

import HomePage from "./screens/Home";
import ServicePage from "./screens/Services";
import CareersPage from "./screens/Careers";
import ContactusPage from "./screens/Contactus";
import AboutUsPage from "./screens/Aboutus";
import CertificatesPage from "./screens/Certificates";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;