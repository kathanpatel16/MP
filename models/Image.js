const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  url: String,
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  votes: { type: Number, default: 0 },
  aiVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("Image", imageSchema);
