import { int, mysqlTable, serial, text } from 'drizzle-orm/mysql-core'

export const MessageTable = mysqlTable('message', {
  id: serial('id').primaryKey(),

  content: text('content').notNull(),

  sender_id: int('sender_id').notNull(),
  recipient_id: int('recipient_id').notNull(),
})
