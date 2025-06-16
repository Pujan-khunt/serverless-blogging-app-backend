import { Context, Hono } from "hono";
const app = new Hono();

// Register a user.
app.get("/signup", (c: Context) => {
  return c.text("")
})

// Login a user.
app.get("/signin", (c: Context) => {
  return c.text("")
})

export default app;
