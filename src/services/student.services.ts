import { PrismaClient } from "../generated/prisma/client";

export const prisma = new PrismaClient({
  accelerateUrl: "",
  log: ["query", "info", "warn", "error"]
});




export const createStudent = (data: any) => {
  return prisma.student.create({ data });
};

export const getStudents = () => {
  return prisma.student.findMany();
};

export const getStudentById = (id: string) => {
  return prisma.student.findUnique({ where: { id } });
};
