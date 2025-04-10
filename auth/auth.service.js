"use strict";
// auth/auth.service.js
const { Sequelize } = require("sequelize"); // Import the Sequelize constructor

const User = require("../user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = {
  async registerUser({ username, email, password }) {
    try {
      // Check if user with the same username or email already exists
      const existingUser = await User.findOne({
        where: {
          [Sequelize.Op.or]: [{ username }, { email }], // Use Sequelize.Op directly
        },
      });
      if (existingUser) {
        throw new Error("Username or email already exists");
      }
      // const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password,
        // password: hashedPassword,
      });
      return newUser; // Sequelize's create method returns the created instance
    } catch (error) {
      console.error("Error in authService.registerUser:", error);
      throw error;
    }
  },
  async loginUser(email, password) {
    console.log("LOGGIN IN NOW", email, password);
    try {
      const user = await User.findOne({ where: { email } });
      console.log("USER WAS GOOD", user);
      // const user = await User.findOne({ email }).select("+password"); // Select the password field
      if (!user) {
        return null; // Invalid credentials
      }
      // if (!user || !(await bcrypt.compare(password, user.password))) {
      //   return null; // Invalid credentials
      // }
      // Generate a JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h", // Example expiration
      });
      return token;
    } catch (error) {
      console.error("Error in authService.loginUser:", error);
      throw error;
    }
  },
  // Potentially other auth-related service methods (e.g., password reset logic)
};
module.exports = authService;
