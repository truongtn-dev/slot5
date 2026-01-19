const express = require("express");
const tasksRoutes = require("./src/routes/tasksRoutes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
// middlewares
app.use(express.json());
// Parse form-urlencoded (form HTML)
app.use(express.urlencoded({ extended: true }));
app.use("/api/tasks", tasksRoutes);

const connectDB = require("./src/config/db");
// Connect to the Database
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on
http://localhost:${PORT}`);
});
