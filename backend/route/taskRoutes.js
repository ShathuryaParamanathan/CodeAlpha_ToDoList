const express = require('express');
const {
  getAllTask,
//   getTaskById,
  createTask,
   updateTask,
//   deleteTask
} = require('../controller/taskController');

const router = express.Router();

router.get('/', getAllTask);
// router.get('/:id', getTaskById);
router.post('/', createTask);

router.put('/editTask/:id', updateTask);
// router.delete('/:id', deleteTask);

module.exports = router;
