import { Context } from "hono";
import { env } from "hono/adapter";
import { RuntimeEnv } from "../types/RuntimeEnv";

const ENV_KEYS = ["DATABASE_URL", "PORT"] as const;
type EnvKey = (typeof ENV_KEYS)[number];

export function getEnv(c: Context, key: EnvKey): RuntimeEnv[EnvKey] {
  const allEnvs = env<RuntimeEnv>(c, "workerd");
  const value = allEnvs[key];
  if (value === undefined || value === null) {
    throw new Error(`Missing required environment variable: ${String(key)}`)
  }
  return value;
}

