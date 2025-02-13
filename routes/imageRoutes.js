const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const authMiddleware = require("../middleware/authMiddleware");
const Image = require("../models/Image");

const router = express.Router();
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => cb(null, uuidv4() + "-" + file.originalname),
});
const upload = multer({ storage });

// Upload Image
router.post("/upload", authMiddleware, upload.single("image"), async (req, res) => {
  const newImage = new Image({ userId: req.user.id, url: `/uploads/${req.file.filename}` });
  await newImage.save();
  res.status(201).json({ message: "Image uploaded successfully" });
});

// Fetch Images
router.get("/all", async (req, res) => {
  const images = await Image.find({ status: "approved" });
  res.json(images);
});

// Vote on Image
router.post("/vote/:id", authMiddleware, async (req, res) => {
  const image = await Image.findById(req.params.id);
  if (!image) return res.status(404).json({ message: "Image not found" });

  image.votes += 1;
  await image.save();
  res.json({ message: "Voted successfully" });
});

module.exports = router;
