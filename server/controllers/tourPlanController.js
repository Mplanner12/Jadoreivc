const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create a tour plan
exports.createTourPlan = async (req, res) => {
  try {
    const {
      location,
      startDate,
      endDate,
      time,
      numberOfPeople,
      guidePreference,
    } = req.body;
    const tourPlan = await prisma.tourPlan.create({
      data: {
        touristId: req.user.id,
        location,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        time,
        numberOfPeople,
        guidePreference,
      },
    });
    res.json(tourPlan);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get tour plans for a user
exports.getTourPlans = async (req, res) => {
  try {
    const tourPlans = await prisma.tourPlan.findMany({
      where: { touristId: req.user.id },
    });
    res.json(tourPlans);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
