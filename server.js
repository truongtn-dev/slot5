// Load env FIRST
const dotenv = require("dotenv");
dotenv.config();

// Imports
const express = require("express");
const connectDB = require("./src/config/db");
const tasksRoutes = require("./src/routes/tasksRoutes");

// App init
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB BEFORE routes & listen
connectDB();

// Routes
app.use("/api/tasks", tasksRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
