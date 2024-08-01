const express = require("express");
const {
  createTourPlan,
  getTourPlans,
} = require("../controllers/tourPlanController");
const { isAuthenticated } = require("../middlewares/auth/isAuthenticated");

const router = express.Router();

router.post("/tourPlans", isAuthenticated, createTourPlan);
router.get("/tourPlans", isAuthenticated, getTourPlans);

module.exports = router;
