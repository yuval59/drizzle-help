import { createEnv } from '@t3-oss/env-core'
import 'dotenv/config'
import { z } from 'zod'

export const env = createEnv({
  server: {
    MYSQL_HOST: z.string(),
    MYSQL_USER: z.string(),
    MYSQL_PASS: z.string(),
    MYSQL_DB: z.string(),
    MYSQL_PORT: z.string().transform((port_string) => parseInt(port_string)),
  },

  runtimeEnv: process.env,
})
