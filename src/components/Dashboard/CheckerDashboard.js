import React, { useState, useEffect } from "react";
import api from "../../services/api";

const CheckerDashboard = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await api.get("/images/pending");
        setImages(res.data);
      } catch (err) {
        console.error("Error fetching images", err);
      }
    };
    fetchImages();
  }, []);

  const handleVote = async (id, voteType) => {
    try {
      await api.post(`/images/vote/${id}`, { type: voteType });
      setImages(images.filter((img) => img._id !== id));
    } catch (err) {
      console.error("Error voting", err);
    }
  };

  return (
    <div>
      <h2>Image Verification</h2>
      {images.length ? (
        images.map((img) => (
          <div key={img._id}>
            <img src={img.url} alt="To Verify" width="200px" />
            <button onClick={() => handleVote(img._id, "upvote")}>Upvote</button>
            <button onClick={() => handleVote(img._id, "downvote")}>Downvote</button>
          </div>
        ))
      ) : (
        <p>No images to verify.</p>
      )}
    </div>
  );
};

export default CheckerDashboard;
