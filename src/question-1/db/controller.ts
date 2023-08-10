import { drizzle, MySql2Database } from 'drizzle-orm/mysql2'
import mysql from 'mysql2'
import { env } from '../../env'
import { schema } from './schemas'

export abstract class Controller {
  protected static dbInstance = drizzle(
    mysql.createConnection({
      host: env.MYSQL_HOST,
      port: env.MYSQL_PORT,
      user: env.MYSQL_USER,
      password: env.MYSQL_PASS,
      database: env.MYSQL_DB,
    }),
    { schema, mode: 'default' }
  )
}
