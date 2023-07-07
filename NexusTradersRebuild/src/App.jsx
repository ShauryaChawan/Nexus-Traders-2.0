import { useState, useEffect } from "react";
import "./app.css";

import AboutUs from "./components/AboutUs/AboutUs";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import Testimonials from "./components/Testimonials/Testimonials";
import Courses from "./components/Courses/Courses";
import Vision from "./components/Vision/Vision";
import Stats from "./components/Stats/Stats";
import ContactUs from "./components/ContactUs/ContactUs";

const App = () => {
  return (
    <div className="app_container">
      {/* Header */}
      <Header />
      {/* Testimonials */}
      <Testimonials />
      {/* Courses */}
      <Courses />
      {/* We Take Pride */}
      <Stats />
      {/* Vision */}
      <Vision />
      {/* About Us */}
      <AboutUs />
      {/* Contact Us */}
      <ContactUs />
    </div>
  );
};

export default App;
