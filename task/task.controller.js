const { get } = require("http");
const TaskService = require("./task.service");
const { json } = require("sequelize");
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
      res.send("error adding task", error);
    }
  },
  async getTask(req, res) {
    try {
      const getTask = await TaskService.getTask();
      console.log("made it");
      res.send({ getTask });

      // return res.status(201).json({ message: "success", getTask });
    } catch (error) {
      console.log("get task error controller", error);
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
      console.log("error update task controller");
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
        res.send("task deleted fail");
      }
    } catch (err) {
      console.log("this is an eroror", err);
    }
  },
};

module.exports = taskController;
