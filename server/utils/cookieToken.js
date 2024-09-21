const getJwtToken = require("../helpers/getJwtToken");
const { randomBytes } = require("crypto");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const cookieToken = async (user, res, userType) => {
  const token = getJwtToken(user.id); // Using 'id' for JWT
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  };

  user.password = undefined;

  const refreshToken = randomBytes(64).toString("hex");

  try {
    await prisma.refreshToken.create({
      data: {
        userId: user.id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    });
  } catch (error) {
    console.error("Error storing refresh token:", error);
    // Handle the error appropriately (e.g., send an error response)
  } finally {
    await prisma.$disconnect(); // Disconnect PrismaClient
  }

  res.status(200).cookie("token", token, options).json({
    success: true,
    token,
    user,
    userType,
  });
};

module.exports = cookieToken;
