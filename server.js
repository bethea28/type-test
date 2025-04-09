"use strict";
const express = require("express");
const app = express();
const port = 3000;
const authRoutes = require("./auth/auth.routes");
app.use(express.json()); // Add this line
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/auth", authRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
