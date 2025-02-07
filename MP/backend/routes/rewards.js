const express = require("express");
const User = require("../models/User");
const Image = require("../models/Image");
const router = express.Router();

router.post("/reward", async (req, res) => {
  const { checkerId, imageId, action } = req.body;
  
  const image = await Image.findById(imageId);
  if (!image) return res.status(404).json({ message: "Image not found" });

  if (action === "approve" || action === "reject") {
    await User.findByIdAndUpdate(checkerId, { $inc: { rewards: 10 } });
  }

  res.json({ message: "Reward given successfully!" });
});

router.get("/leaderboard", async (req, res) => {
  const topCheckers = await User.find({ role: "checker" }).sort({ rewards: -1 }).limit(5);
  res.json(topCheckers);
});

module.exports = router;
