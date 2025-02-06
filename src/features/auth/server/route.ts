import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    return c.json({ success: true });
  })
  .post("/register", zValidator("json", registerSchema), async (c) => {
    console.log("2");
    const { name, email, password } = c.req.valid("json");
    return c.json({ success: true });
  });

export default app;
