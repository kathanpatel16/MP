import React, { useState } from "react";
import api from "../../services/api";

const UploadImage = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);

    try {
      await api.post("/images/upload", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Image uploaded successfully");
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
