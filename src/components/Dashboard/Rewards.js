import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Rewards = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const res = await api.get("/user/points", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        setPoints(res.data.points);
      } catch (err) {
        console.error("Error fetching points", err);
      }
    };
    fetchPoints();
  }, []);

  return (
    <div>
      <h2>Your Reward Points: {points}</h2>
    </div>
  );
};

export default Rewards;
