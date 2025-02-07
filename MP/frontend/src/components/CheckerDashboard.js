// components/CheckerDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckerDashboard = () => {
  const [imagesToCheck, setImagesToCheck] = useState([]);

  useEffect(() => {
    // Fetch the list of images pending verification
    axios.get('/api/pending-images')
      .then((response) => {
        setImagesToCheck(response.data);
      })
      .catch((error) => {
        console.error('Error fetching pending images', error);
      });
  }, []);

  const handleVerification = (imageId, decision) => {
    // Handle image verification (approve/reject)
    axios.post('/api/verify-image', { imageId, decision })
      .then(() => {
        alert('Verification complete');
      })
      .catch((error) => {
        console.error('Error verifying image', error);
      });
  };

  return (
    <div>
      <h2>Checker Dashboard</h2>
      {imagesToCheck.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt="Pending" />
          <button onClick={() => handleVerification(image.id, 'approve')}>Approve</button>
          <button onClick={() => handleVerification(image.id, 'reject')}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default CheckerDashboard;
