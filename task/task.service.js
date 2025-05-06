const Task = require("./task.model");
class TaskService {
  async addTask(task) {
    console.log("added task service", task);
    // return "adding service";

    try {
      const taskObj = await Task.create({
        personId: task.personId,
        lastName: task.lastName,
        firstName: task.firstName,
        description: task.description,
      });
      return taskObj;
    } catch (err) {
      console.log("service problem", err);
      // throw ("adding ask error", err);
    }
  }

  async getTask(req, res) {
    console.log("get task");
    try {
      const allTask = await Task.findAll();
      return allTask;
    } catch (err) {
      console.log("get task error service", err);
    }
  }

  async updateTask(task) {
    try {
      const targetTask = await Task.findOne({
        where: { id: task.params.taskId },
      });
      if (targetTask) {
        // targetTask.update({
        //   firstName: task.body.firstName,
        //   description: task.body.description,
        // });
        targetTask.update(task.body);
      }
      return "UPDATE WAS GOOD";
    } catch (err) {
      console.log("update errore", err);
    }
  }
  async deleteTask(taskId) {
    const destroy = await Task.destroy({ where: { id: taskId } });
    console.log("destory method", destroy);
    return destroy;
    if (destroy === 1) {
      return "destroy was successful";
    } else {
      return "destroy is failed";
    }
  }
}

module.exports = new TaskService();
