export interface RuntimeEnv {
  DATABASE_URL: string;
  PORT: number;
  [key: string]: unknown;
}
