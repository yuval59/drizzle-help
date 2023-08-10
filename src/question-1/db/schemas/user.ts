import { mysqlTable, serial, text } from 'drizzle-orm/mysql-core'

export const UserTable = mysqlTable('user', {
  id: serial('id').primaryKey(),

  username: text('username').notNull(),
})
