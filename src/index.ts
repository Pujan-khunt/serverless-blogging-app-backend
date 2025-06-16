import { Context, Hono } from 'hono'
import userRouter from "./routes/user.routes"
import postRouter from "./routes/posts.routes"

const app = new Hono();

app.route("/users", userRouter)
app.route("/posts", postRouter)

app.get('/healthcheck', (c: Context) => {
  return c.json({
    message: "Everything is working fine..."
  })
})

export default app
