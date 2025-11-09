import React from "react";
import "./Services.css";

const Services = () => (
  <section className="services-section">
    <h2 className="services-title">Services</h2>

    <div className="service-list">
      <div className="service-item">
        <h3>Film Production</h3>
        <p>Creative storytelling and production.</p>
      </div>

      <div className="service-item">
        <h3>Branding</h3>
        <p>Memorable brand identities.</p>
      </div>

      <div className="service-item">
        <h3>Art Curation</h3>
        <p>Unique artistic experiences.</p>
      </div>
    </div>
  </section>
);

export default Services;
