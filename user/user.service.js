import User from "./user.model";
class UserService {
  async getAllUsers() {
    try {
      return await User.findAll();
    } catch (error) {
      console.error("Error in userService.getAllUsers:", error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      return await User.findByPk(id);
    } catch (error) {
      console.error(`Error in userService.getUserById for ID ${id}:`, error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      return await User.create(userData);
    } catch (error) {
      console.error("Error in userService.createUser:", error);
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      return await User.update(userData, {
        where: { id },
      });
    } catch (error) {
      console.error(`Error in userService.updateUser for ID ${id}:`, error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      return await User.destroy({
        where: { id },
      });
    } catch (error) {
      console.error(`Error in userService.deleteUser for ID ${id}:`, error);
      throw error;
    }
  }
}

export default UserService();
