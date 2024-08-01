const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("./utils/cookieParser");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const planRoutes = require("./routes/tourPlanRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/plans", planRoutes);

app.use(errorHandler); // Use the error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
