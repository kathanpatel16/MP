// components/UploadImage.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      setMessage('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      await axios.post('/api/upload-image', formData);
      setMessage('Image uploaded successfully!');
    } catch (error) {
      setMessage('Error uploading image.');
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadImage;
