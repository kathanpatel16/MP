import React, { useEffect, useState } from "react";
import api from "../../services/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/admin/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  return (
    <div>
      <h2>Manage Users</h2>
      {users.map((user) => (
        <div key={user._id}>
          <span>{user.name} - {user.email}</span>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
