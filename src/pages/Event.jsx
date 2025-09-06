import React from "react";
import "./Page.css";

const Event = () => {
  return (
    <div className="page-container">
        <h2> Upcoming Events</h2>
        <div className="card-grid">
          <div className="glass small-card" data-aos="zoom-in">
            <h3>First-Year Induction</h3>
            <p>Welcoming and introducing first-year students to the club</p>
          </div>
          <div className="glass small-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Second-Year Induction</h3>
            <p>Engaging and onboarding second-year students into the community</p>
          </div>
          <div className="glass small-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Guest Lecture</h3>
            <p>Inspiring talk from Sofware Engineer from Google</p>
          </div>
        </div>
    </div>
  );
};

export default Event;
