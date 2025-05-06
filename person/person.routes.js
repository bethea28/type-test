const express = require("express");
const router = express.Router();
const personController = require("./person.controller");
router.post("/createPerson", personController.createPerson);
router.get("/getPersons", personController.getPersons);

module.exports = router;
