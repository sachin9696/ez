import React from "react";
import Hero from "./components/Hero";
import AboutTeam from "./components/AboutTeam";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <AboutTeam />
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactForm />
    </div>
  );
}

export default App;
