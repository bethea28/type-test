const express = require("express");
const router = express.Router();
const storyController = require("./story.controller");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/", authenticateToken, storyController.createStory);
module.exports = router;
