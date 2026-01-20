import { Request, Response } from "express";
import * as StudentService from "../services/student.services";
import { createStudentSchema } from "../validators/student.validators";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const data = createStudentSchema.parse(req.body);
    const student = await StudentService.createStudent(data);
    res.status(201).json(student);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getStudents = async (_: Request, res: Response) => {
  const students = await StudentService.getStudents();
  res.json(students);
};
