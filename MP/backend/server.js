require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const imageRoutes = require("./routes/images");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", authRoutes);
app.use("/api", imageRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
