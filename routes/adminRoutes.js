const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Image = require("../models/Image");

const router = express.Router();

// Fetch Pending Images
router.get("/images/pending", authMiddleware, async (req, res) => {
  const images = await Image.find({ status: "pending" });
  res.json(images);
});

// Approve Image
router.post("/images/approve/:id", authMiddleware, async (req, res) => {
  const image = await Image.findById(req.params.id);
  image.status = "approved";
  await image.save();
  res.json({ message: "Image approved" });
});

// Reject Image
router.post("/images/reject/:id", authMiddleware, async (req, res) => {
  await Image.findByIdAndDelete(req.params.id);
  res.json({ message: "Image rejected" });
});

module.exports = router;
