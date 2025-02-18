import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(256),
  image: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value))
    ])
    .optional(),
  workspaceId: z.string()
});

export const updateProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Must be at least 1 character")
    .max(256)
    .optional(),
  image: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value))
    ])
    .optional()
});
