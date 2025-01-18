require("dotenv").config();
const path = require("path");

// For Render's persistent storage
const RENDER_DISK_PATH = process.env.RENDER_DISK_PATH || "/data";

module.exports = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
  uploadDir:
    process.env.NODE_ENV === "production"
      ? path.join(RENDER_DISK_PATH, "uploads")
      : path.join(__dirname, "../../uploads"),
  backgroundDir:
    process.env.NODE_ENV === "production"
      ? path.join(RENDER_DISK_PATH, "backgrounds")
      : path.join(__dirname, "../../backgrounds"),
  publicUrl: process.env.PUBLIC_URL || "http://localhost:5000",
  jwt: {
    accessTokenSecret: process.env.JWT_ACCESS_SECRET,
    refreshTokenSecret: process.env.JWT_REFRESH_SECRET,
    accessTokenExpiry: process.env.JWT_ACCESS_EXPIRY || "15m",
    refreshTokenExpiry: process.env.JWT_REFRESH_EXPIRY || "7d",
  },
};
