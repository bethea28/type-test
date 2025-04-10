const StoryService = require("./story.service"); // Adjust path as needed

const storyController = {
  async createStory(req, res) {
    try {
      const storyData = req.body;
      const sideAAuthorId = req.user.id; // Assuming your JWT middleware populates req.user

      console.log("req body now nick", req.user);
      console.log("USER ID NOW nicky ", storyData);

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
};

module.exports = storyController;
