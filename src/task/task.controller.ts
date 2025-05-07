import type { Request, Response } from "express"; // Import necessary types
import TaskService from "./task.service.ts";
// Assuming TaskService exists and is correctly implemented

interface TaskController {
  addTask(req: Request, res: Response): Promise<Response | void>;
  getTask(req: Request, res: Response): Promise<Response | void>;
  updateTask(req: Request, res: Response): Promise<Response | void>;
  deleteTask(req: Request, res: Response): Promise<Response | void>;
}

const taskController: TaskController = {
  async addTask(req: Request, res: Response) {
    try {
      const task = req.body;
      // const addedTask = await TaskService.addTask(task); // Uncomment once TaskService is implemented
      return res.status(201).json({ message: "Task added successfully" });
    } catch (error) {
      console.error("Error adding task:", error);
      return res.status(500).json({ error: "Error adding task" });
    }
  },

  async getTask(req: Request, res: Response) {
    console.log("getting task now");
    try {
      const task = await TaskService.getTask(); // Uncomment once TaskService is implemented
      return res
        .status(200)
        .json({ message: "Task fetched successfully", task });
    } catch (error) {
      console.log("bad bad");
      console.error("Error fetching task:", error);
      return res.status(500).json({ error: "Error fetching task" });
    }
  },

  async updateTask(req: Request, res: Response) {
    try {
      const taskData = req.body;
      // const updatedTask = await TaskService.updateTask(taskData); // Uncomment once TaskService is implemented
      return res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
      console.error("Error updating task:", error);
      return res.status(500).json({ error: "Error updating task" });
    }
  },

  async deleteTask(req: Request, res: Response) {
    try {
      const taskId = req.params.taskId;
      // const deletedTask = await TaskService.deleteTask(taskId); // Uncomment once TaskService is implemented
      return res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error deleting task:", error);
      return res.status(500).json({ error: "Error deleting task" });
    }
  },
};

export default taskController;
