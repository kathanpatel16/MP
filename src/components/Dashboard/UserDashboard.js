import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const res = await api.get("/folders/user", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        setFolders(res.data);
      } catch (err) {
        console.error("Error fetching folders", err);
      }
    };
    fetchFolders();
  }, []);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await api.get("/images/user", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        setImages(res.data);
      } catch (err) {
        console.error("Error fetching images", err);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={logout}>Logout</button>
      <Link to="/upload">Upload Image</Link>
      <h3>Your Uploaded Images:</h3>
      <h3>Your Tracked Folders:</h3>
      {folders.length ? (
        folders.map((folder) => <div key={folder._id}>{folder.name}</div>)
      ) : (
        <p>No folders tracked yet.</p>
      )}

      {images.length ? (
        images.map((img) => <img key={img._id} src={img.url} alt="Uploaded" width="200px" />)
      ) : (
        <p>No images uploaded yet.</p>
      )}
    </div>
  );
};

export default UserDashboard;
