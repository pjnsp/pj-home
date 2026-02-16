import { z } from "zod";

const envSchema = z.object({
  ENVIRONMENT: z
    .enum(["production", "development", "test"])
    .default("development"),
});

export const env = envSchema.parse(process.env);
