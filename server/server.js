const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("./utils/cookieParser");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const planRoutes = require("./routes/tourPlanRoutes");
const tourGuideRoutes = require("./routes/tourGuideRoutes");
const planTourRoutes = require("./routes/planTourRoutes");

const { errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/tourGuides", tourGuideRoutes);
app.use("/api/planTours", planTourRoutes);

app.use(errorHandler); // Use the error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
