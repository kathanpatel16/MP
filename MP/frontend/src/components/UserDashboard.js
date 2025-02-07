// components/UserDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    // Fetch the user's uploaded images and their verification statuses
    axios.get('/api/user-images')
      .then((response) => {
        setUploadedImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching uploaded images', error);
      });
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      {uploadedImages.length === 0 ? (
        <p>No images uploaded yet.</p>
      ) : (
        uploadedImages.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="Uploaded" />
            <p>Status: {image.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserDashboard;
