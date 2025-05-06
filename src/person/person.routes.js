import express from "express";
import personController from "./person.controller.js";
const router = express.Router();

router.post("/createPerson", personController.createPerson);
router.get("/getPersons", personController.getPersons);

export default router;
