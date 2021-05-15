// Import Server Dependencies
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Import Router
const router = require("./routes/index");

// Configure Mongoose
mongoose.connect(
  process.env.MONGOOSEDB || "mongodb://localhost/fitness_tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Initialize Express Server
const app = express();

// Configure Express Server Port
const PORT = process.env.PORT || 3000;

// Configure URL Encoded Data Parsing Middleware
app.use(express.urlencoded({ extended: true }));

// Configure JSON Parsing Middleware
app.use(express.json());

// Set Static Asset Path
app.use(express.static("public"));

// Configure Routing
app.use(router);

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server now listening at http://localhost:${PORT}`);
});
