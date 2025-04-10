"use strict";
// auth/auth.routes.js
const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
// POST /api/auth/register - Register a new user
router.post("/register", authController.register);
// POST /api/auth/login - Login an existing user
router.post("/login", authController.login);
// POST /api/auth/logout - Logout a user (if applicable, e.g., invalidating tokens)
router.post("/logout", authController.logout);
// GET /api/auth/me - Get the currently authenticated user's information (requires middleware)
// router.get(
//   "/me",
//   require("../middleware/authMiddleware"),
//   authController.getMe
// );
// Optionally, other auth-related routes like password reset requests, etc.
module.exports = router;
