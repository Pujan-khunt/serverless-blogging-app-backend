import { Context, Hono } from 'hono'
import { getPrisma } from './config/prismaFunction'
import { getEnv } from "./utils/getEnv";

const app = new Hono();

app.get('/', (c: Context) => {
  const url = getEnv(c, "DATABASE_URL")
  const port = getEnv(c, "")
  return c.text(`Hello world: ${url}`);
})

export default app
