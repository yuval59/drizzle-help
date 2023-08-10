import 'dotenv/config'
import type { Config } from 'drizzle-kit'

const { MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_DB, MYSQL_PORT } = process.env

const connectionString = `mysql://${MYSQL_USER}:${MYSQL_PASS}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}`

export default {
  out: './drizzle',
  schema: ['./src/question-1/db/schemas'],

  driver: 'mysql2',
  dbCredentials: {
    connectionString,
  },
} satisfies Config
