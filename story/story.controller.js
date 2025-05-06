import StoryService from "./story.service.js"; // Added .js extension
const storyController = {
  async createStory(req, res) {
    console.log("req body now mom", req.body);
    // console.log("BRYAN STORY DATA ", storyData);
    // return;
    try {
      const storyData = req.body;
      const sideAAuthorId = req.user ? req.user.id : 2; // Assuming your JWT middleware populates req.user, defaulting to 2 if not

      const newStory = await StoryService.createStory(storyData, sideAAuthorId);

      return res.status(201).json({
        message: `Story created successfully (${newStory.storyType}).`,
        story: newStory,
      });
    } catch (error) {
      console.error("Error creating story:", error);
      let statusCode = 500;
      if (
        error.message.includes("required") ||
        error.message.includes("Invalid")
      ) {
        statusCode = 400;
      } else if (error.message.includes("already exists")) {
        statusCode = 409;
      }
      return res.status(statusCode).json({ error: error.message });
    }
  },
  async getAllStories(req, res) {
    try {
      // const storyData = req.body;
      // const sideAAuthorId = req.user.id; // Assuming your JWT middleware populates req.user

      console.log("req body now nick");
      // console.log("USER ID NOW nicky ", storyData);
      const allStories = await StoryService.getAllStories(); // Changed variable name for clarity

      return res.status(200).json({
        // Corrected status code for successful GET
        message: `Got all stories`,
        allStories: allStories,
      });
    } catch (error) {
      console.error("Error fetching all stories:", error); // Updated error message
      let statusCode = 500;
      if (
        error.message.includes("required") ||
        error.message.includes("Invalid")
      ) {
        statusCode = 400;
      } else if (error.message.includes("already exists")) {
        statusCode = 409;
      }
      return res.status(statusCode).json({ error: error.message });
    }
  },
};

export default storyController;
