import { get } from "http";
import TaskService from "./task.service.js";
import { json } from "sequelize";
const taskController = {
  async addTask(req, res) {
    // res.send("add task");
    try {
      // console.log("add task", req.body);
      const task = req.body;
      const addingTask = await TaskService.addTask(task);
      // console.log("adding task bryan", addingTask);

      return res.status(201).json({ message: "good", addingTask });
    } catch (error) {
      res.status(500).send(`error adding task: ${error.message}`); // Include error message
    }
  },
  async getTask(req, res) {
    try {
      const getTask = await TaskService.getTask();
      console.log("made it");
      res.status(200).json({ getTask }); // Send JSON response with status 200
      // return res.status(201).json({ message: "success", getTask });
    } catch (error) {
      console.error("get task error controller", error); // Use console.error
      res.status(500).json({ error: "Failed to get tasks" }); // Send error response
    }
  },
  async updateTask(req, res) {
    console.log("update task chat chat", req.body);
    // const taskId = req.params.taskId;
    try {
      const taskData = req.body;
      const updateTask = await TaskService.updateTask(req);
      res.send("update task good");
    } catch (error) {
      console.error("error update task controller", error); // Use console.error
      res.status(500).send("error updating task");
    }
  },

  async deleteTask(req, res) {
    console.log("delete taks");
    try {
      const taskId = req.params.taskId;
      const deletedTask = await TaskService.deleteTask(taskId);
      console.log("delete task final", deletedTask);
      if (deletedTask) {
        res.send("task deleted success");
      } else {
        res.status(404).send("task not found or could not be deleted"); // More specific response
      }
    } catch (err) {
      console.error("this is an error", err); // Corrected typo and used console.error
      res.status(500).send("error deleting task");
    }
  },
};

export default taskController;
