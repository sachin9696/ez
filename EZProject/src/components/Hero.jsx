import React from "react";
import "./AboutTeam.css";

const AboutTeam = () => (
  <section className="about-team-section">
    <h2 className="team-title">Meet the Team</h2>

    <p className="team-subtext">
      Our crew of curious builders keeps projects humming with ideas, energy, and a little
      creative chaos.
    </p>

    <div className="team-members">
      <div className="member-card">
        <div className="avatar" />
        <h3>Member 1</h3>
        <p>Frontend Developer</p>
      </div>

      <div className="member-card">
        <div className="avatar" />
        <h3>Member 2</h3>
        <p>Backend Engineer</p>
      </div>

      <div className="member-card">
        <div className="avatar" />
        <h3>Member 3</h3>
        <p>UI/UX Designer</p>
      </div>
    </div>
  </section>
);

export default AboutTeam;
