const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");
const taskRoutes = require('./route/taskRoutes');
const path = require("path");

// Load environment variables
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

// Connect to the database
connectDatabase();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Task routes
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
