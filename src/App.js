import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./screens/HomePage";
// import ServicePage from "./screens/Services";
// import NewsPage from "./screens/News";
import ContactusPage from "./screens/Contactus";
import CareersPage from "./screens/Careers";
// import AboutUsPage from "./screens/Aboutus"



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/news" element={<NewsPage />} />
          <Route path="/services" element={<ServicePage />} /> */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/aboutus" element={<AboutUsPage />} />*/}
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;