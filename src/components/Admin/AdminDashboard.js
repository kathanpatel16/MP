import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <Link to="/admin/users">Manage Users</Link>
      <Link to="/admin/images">Approve Images</Link>
      <Link to="/admin/folders">Manage Folders</Link>

    </div>
  );
};

export default AdminDashboard;
