import React from "react";
import "./Page.css";

const Event = () => {
  return (
    <div className="page-container">
      <div className="glass card">
        <h2>Upcoming Events 🎉</h2>
        <p>
          Join our coding contests, workshops, and hackathons.
          Stay tuned for upcoming announcements!
        </p>
        <ul>
          <li>🔹 Weekly Coding Contest – Every Sunday</li>
          <li>🔹 Debugging Challenge – Alternate Wednesdays</li>
          <li>🔹 Monthly Mini Project – Last Week of the Month</li>
        </ul>
      </div>
    </div>
  );
};

export default Event;
