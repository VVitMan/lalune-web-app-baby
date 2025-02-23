import express from "express";
import { getAllPersons, createPerson } from "../controllers/person.controllers.js";

const router = express.Router();

router.get("/persons", getAllPersons);

export default router;