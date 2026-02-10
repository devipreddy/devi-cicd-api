const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/api/info", (req, res) => {
  res.json({
    environment: "AWS Elastic Beanstalk",
    deployedAt: new Date().toLocaleString(),
    status: "LIVE"
  });
});

// Fallback for all other routes (FIXED)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
