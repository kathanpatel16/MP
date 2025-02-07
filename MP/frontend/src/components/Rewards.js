import { useState, useEffect } from "react";

const Rewards = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then(res => res.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold text-center mb-4">Top Checkers</h2>
      <ul>
        {leaders.map((checker, index) => (
          <li key={index} className="flex justify-between border-b py-2">
            <span>{checker.name}</span>
            <span>{checker.rewards} Points</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;
