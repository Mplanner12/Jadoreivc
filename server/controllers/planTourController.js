// controllers/planTourController.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getPlannedTours = async (req, res) => {
  // console.log(req.user);
  try {
    // if (!req.user) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }
    const plannedTours = await prisma.planTour.findMany({
      // where: {
      //   userId: {
      //     not: null, // Ensures that userId is not null, though this might be redundant
      //   },
      // },
      include: {
        user: {
          select: {
            // Select only the fields you need from the User model
            id: true,
            fullName: true,
            // ... other fields
          },
        },
      },
    });

    res.json({ success: true, plannedTours });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
