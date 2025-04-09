const userService = require("./user.service");

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching all users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  async getUserById(req, res) {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await userService.getUserById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error(`Error fetching user with ID ${req.params.id}:`, error);
      res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  async createUser(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = parseInt(req.params.id, 10);
      const [updatedCount, updatedUsers] = await userService.updateUser(
        userId,
        req.body
      );
      if (updatedCount > 0) {
        res.status(200).json(updatedUsers[0]);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error(`Error updating user with ID ${req.params.id}:`, error);
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = parseInt(req.params.id, 10);
      const deletedRows = await userService.deleteUser(userId);
      if (deletedRows > 0) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error(`Error deleting user with ID ${req.params.id}:`, error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}

module.exports = new UserController();
