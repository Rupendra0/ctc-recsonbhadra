import React from "react";
import "./Page.css";

const Event = () => {
  return (
    <div className="page-container">
      <div className="glass card">
        <h2>Upcoming Events</h2>
        <p>
          Join our coding contests, workshops, and hackathons.
          Stay tuned for upcoming announcements!
        </p>
        <ul>
          <li>🔹 First-Year Induction – Welcoming and introducing first-year students to the club.</li>
          <li>🔹 Second-Year Induction – Engaging and onboarding second-year students into the community.</li>
          <li>🔹 Guest Lecture – Inspiring talk by Software Engineer from Google.</li>
        </ul>
      </div>
    </div>
  );
};

export default Event;
