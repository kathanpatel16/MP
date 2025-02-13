import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import UserDashboard from "./components/Dashboard/UserDashboard";
import UploadImage from "./components/Dashboard/UploadImage";
import CheckerDashboard from "./components/Dashboard/CheckerDashboard";
import Rewards from "./components/Dashboard/Rewards";
import Leaderboard from "./components/Dashboard/Leaderboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import PrivateRoute from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute component={UserDashboard} />} />
      <Route path="/upload" element={<PrivateRoute component={UploadImage} />} />
      <Route path="/checker" element={<PrivateRoute component={CheckerDashboard} />} />
      <Route path="/rewards" element={<PrivateRoute component={Rewards} />} />
      <Route path="/leaderboard" element={<PrivateRoute component={Leaderboard} />} />
      <Route path="/admin" element={<PrivateRoute component={AdminDashboard} />} />
    </Routes>
  );
};

export default App;
