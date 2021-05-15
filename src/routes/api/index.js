const router = require("express").Router();
const { Workout } = require("../../models/index");

// Get All Workouts
router.get("/workouts", async (req, res) => {
  Workout.aggregate(
    [
      // Sort from newest to oldest
      {
        $sort: { day: 1 },
      },
      // Calculate Workout Duration
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ],
    (err, data) => {
      // Handle Error
      if (err) throw err;
      // Return Workouts
      res.json(data);
    }
  );
});

// Get Workouts In Given Range
router.get("/workouts/range", async (req, res) => {
  try {
    Workout.aggregate(
      [
        // Sort from newest to oldest
        {
          $sort: { day: 1 },
        },
        // Limit To Last 7 Workouts
        {
          $limit: 7,
        },
        // Calculate Workout Duration
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
          },
        },
      ],
      (err, data) => {
        // Handle Error
        if (err) throw err;
        // Return Workouts
        res.json(data);
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

// Creat New Workout
router.post("/workouts", async (req, res) => {
  try {
    Workout.create(req.body, (err, data) => {
      // Handle Error
      if (err) throw err;
      // Return response data
      res.status(200).send(data);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add New Exercise To Workout
router.put("/workouts/:id", async (req, res) => {
  try {
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      (err, data) => {
        // Handle Error
        if (err) throw err;
        // Return Response Data
        res.status(200).send(data);
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
