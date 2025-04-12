const express = require("express");
const router = express.Router();
const storyController = require("./story.controller");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/createStory", authenticateToken, storyController.createStory);
router.get("/getAllStories", authenticateToken, storyController.getAllStories);
module.exports = router;
