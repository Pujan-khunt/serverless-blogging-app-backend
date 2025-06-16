import { Context, Hono } from "hono";

const app = new Hono()

// Get all blog posts of the entire application.
app.get("/", (c: Context) => {
  return c.text("")
})

// Create a blog post for the authenticated user.
app.post("/", (c: Context) => {
  return c.text("")
})

// Get post by Id for the entire application.
app.get("/:id", (c: Context) => {
  return c.text("")
})

// Update post by id.
app.put("/:id", (c: Context) => {
  return c.text("")
})

// Delete post by id.
app.put("/:id", (c: Context) => {
  return c.text("")
})

export default app
