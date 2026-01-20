import { Router } from "express";
import * as StudentController from "../controller/student.controller";

const router = Router();

router.post("/", StudentController.createStudent);
router.get("/", StudentController.getStudents);

export default router;
