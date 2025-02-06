import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters").max(256)
});

export const registerSchema = z.object({
  name: z.string().min(6, "Name must be at least 6 characters").max(256),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters").max(256)
});
