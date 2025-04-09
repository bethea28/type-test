"use strict";
// auth/auth.service.js
const User = require("../user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = {
  async registerUser({ username, email, password }) {
    try {
      // Check if user with the same username or email already exists
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (existingUser) {
        throw new Error("Username or email already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      return await newUser.save();
    } catch (error) {
      console.error("Error in authService.registerUser:", error);
      throw error;
    }
  },
  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email }).select("+password"); // Select the password field
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return null; // Invalid credentials
      }
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
