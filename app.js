const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const userRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());

app.use("/user", userRouter);

// Catch-all for undefined routes
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  // Ensure statusCode is numeric
  const statusCode = err.statusCode || 500;  // Default to 500 for internal server error
  const status = err.status || "error";
  const message = err.message || "Internal server error";

  // Log the error details for debugging
  console.error(`Error occurred: ${message} (Status: ${statusCode})`);

  res.status(statusCode).json({
    status: status,
    message: message,
  });
});

module.exports = app;

