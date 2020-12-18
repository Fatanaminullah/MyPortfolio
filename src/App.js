import React, { Component } from "react";
import { init } from "emailjs-com";
import "./assets/css/App.css";
// import "antd/dist/antd.css";
import { main, portfolio, resume } from "./resumeData.json";
import About from "./pages/about/about-section";
import Contact from "./pages/contact/contact-section";
import Footer from "./pages/footer/footer-section";
import Header from "./pages/header/header-section";
import Portfolio from "./pages/projects/projects-section";
import Resume from "./pages/resume/resume-section";

init("user_eFaRvhEZUjHIcx9rr2OIJ");

const App = () => {
  return (
    <div className="App">
      <Header data={main} />
      <About data={main} />
      <Resume data={resume} />
      <Portfolio data={portfolio} />
      <Contact data={main} />
      <Footer data={main} />
    </div>
  );
};

export default App;
