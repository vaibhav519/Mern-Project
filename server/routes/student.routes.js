import express from "express";
import { getStudents, createStudent } from "../controllers/student.controller.js";
import student from "../models/student.model.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);

export default router;
