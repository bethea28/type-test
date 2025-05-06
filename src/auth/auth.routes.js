"use strict";
import express from "express";
import authController from "./auth.controller.js";
// import authMiddleware from "../middleware/authMiddleware.js"; // Assuming authMiddleware.js is in the ../middleware directory and uses export default

const router = express.Router();

// POST /api/auth/register - Register a new user
router.post("/register", authController.register);

// POST /api/auth/login - Login an existing user
router.post("/login", authController.login);

// POST /api/auth/logout - Logout a user (if applicable, e.g., invalidating tokens)
router.post("/logout", authController.logout);

// GET /api/auth/me - Get the currently authenticated user's information (requires middleware)
router.get("/me", authController.getMe);

// Optionally, other auth-related routes like password reset requests, etc.

export default router;
