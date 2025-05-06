import express from "express";
import taskController from "./task.controller.js";
const router = express.Router();

router.post("/addTask", taskController.addTask);
router.get("/getTask", taskController.getTask);
router.put("/updateTask/:taskId", taskController.updateTask);
router.delete("/deleteTask/:taskId", taskController.deleteTask);

export default router;
