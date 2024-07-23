const express = require("express");
const {
  getAllTask,
  //   getTaskById,
  getSpecficTask,
  createTask,
  updateTask,
  //   deleteTask
} = require("../controller/taskController");

const router = express.Router();

router.get('/', getAllTask);
router.get("/:filter", getSpecficTask);
router.post('/', createTask);

router.put('/editTask/:id', updateTask);
// router.delete('/:id', deleteTask);

module.exports = router;
