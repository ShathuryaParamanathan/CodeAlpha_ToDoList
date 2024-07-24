const express = require("express");
const {
  getAllTask,
  getSpecficTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();

router.get("/", getAllTask).post("/", createTask);
router.get("/:filter", getSpecficTask);

router.put("/editTask/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
