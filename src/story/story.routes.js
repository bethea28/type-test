import express from "express";
const router = express.Router();
import storyController from "./story.controller.js";
// import authenticateToken from "../middleware/authMiddleware.js"; // Assuming authMiddleware.js uses export default

router.post("/createStory", storyController.createStory);
// router.post("/", storyController.createStory);
// router.post("/createStory", authenticateToken, storyController.createStory);
router.get("/getAllStories", storyController.getAllStories);
// router.get("/getAllStories", authenticateToken, storyController.getAllStories);

export default router;
