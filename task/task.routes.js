const express = require("express");
router = express.Router();
const taskController = require("./task.controller");

router.post("/addTask", taskController.addTask);
router.get("/getTask", taskController.getTask);
router.put("/updateTask/:taskId", taskController.updateTask);
router.delete("/deleteTask/:taskId", taskController.deleteTask);

module.exports = router;
