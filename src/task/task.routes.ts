import express from "express";
import type { RequestHandler } from "express";
import taskController from "./task.controller";
const router = express.Router();

// router.post("/addTask", taskController.addTask as RequestHandler);
router.get("/getTask", taskController.getTask as RequestHandler);
// router.put("/updateTask/:taskId", taskController.updateTask);
// router.delete("/deleteTask/:taskId", taskController.deleteTask);

export default router;
