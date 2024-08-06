const express = require("express");
const {
  getAllTourGuides,
  getTourGuideById,
} = require("../controllers/tourGuideController");

const router = express.Router();

router.get("/tourGuides", getAllTourGuides);
router.get("/tourGuides/:id", getTourGuideById);

module.exports = router;
