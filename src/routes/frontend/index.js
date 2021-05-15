const router = require("express").Router();
const path = require("path");

// Serve Home Page
router.get("/", (req, res) => {
  try {
    res.send(path.resolve("../public/index.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

// Serve Exercise Page
router.get("/exercise", (req, res) => {
  try {
    res.sendFile(path.resolve("./public/exercise.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

// Serve Stats Page
router.get("/stats", (req, res) => {
  try {
    res.sendFile(path.resolve("./public/stats.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
