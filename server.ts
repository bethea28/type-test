"use strict";
import express from "express";
import type { Express, Request, Response, NextFunction } from "express"; // Import types

// import authRoutes from "./src/auth/auth.routes.js"; // Assuming auth.routes.js uses export default
// import storyRoutes from "./src/story/story.routes.js"; // Assuming story.routes.js uses export default
import taskRoutes from "./src/task/task.routes"; // Assuming task.routes.js uses export default
// import personRoutes from "./src/person/person.routes.js"; // Assuming person.routes.js uses export default

const app: Express = express();
const port = 3000;

app.use(express.json()); // Add this line
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
// app.use((req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization;
//   console.log("Authorization Header", authHeader);
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello orld!");
});
// app.use("/auth", authRoutes);
// app.use("/person", personRoutes);
// app.use("/stories", storyRoutes);
app.use("/task", taskRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
