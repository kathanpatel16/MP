import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const res = await api.get("/leaderboard");
        setLeaders(res.data);
      } catch (err) {
        console.error("Error fetching leaderboard", err);
      }
    };
    fetchLeaders();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((user, index) => (
          <li key={index}>
            {index + 1}. {user.name} - {user.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
