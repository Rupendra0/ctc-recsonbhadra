import React from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const players = [
    { name: "N/A", points: 0 },
    { name: "N/A", points: 0 },
    { name: "N/A", points: 0 },
    { name: "N/A", points: 0 },
    { name: "N/A", points: 0 },
  ];

  return (
    <div className="leaderboard glass">
      <h2> Leaderboard</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index} className="slide-in">
            <span className="rank">#{index + 1}</span>
            <span className="name">{player.name}</span>
            <span className="points">{player.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
