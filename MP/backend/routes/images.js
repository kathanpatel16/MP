const express = require("express");
const multer = require("multer");
const Image = require("../models/Image");
const User = require("../models/User");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  const newImage = new Image({ userId: req.body.userId, imageUrl: req.file.buffer.toString("base64") });
  await newImage.save();
  res.json({ message: "Image uploaded successfully" });
});

router.get("/pending", async (req, res) => {
  const images = await Image.find({ status: "pending" });
  res.json(images);
});

router.post("/vote", async (req, res) => {
  const { imageId, action } = req.body;
  const image = await Image.findById(imageId);
  if (action === "approve") {
    image.votes += 1;
    if (image.votes >= 3) image.status = "approved";
  } else {
    image.status = "rejected";
  }
  await image.save();
  res.json({ message: "Vote recorded" });
});

module.exports = router;
