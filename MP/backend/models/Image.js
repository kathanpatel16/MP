const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  imageUrl: String,
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Image", ImageSchema);
