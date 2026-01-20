import { z } from "zod";

export const createStudentSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  age: z.number().int().min(1)
});
