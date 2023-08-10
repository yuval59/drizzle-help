import { relations } from 'drizzle-orm'
import { MessageTable } from './message'
import { UserTable } from './user'

export const MessageRelations = relations(MessageTable, ({ one }) => ({
  sender: one(UserTable, {
    fields: [MessageTable.sender_id],
    references: [UserTable.id],
  }),

  recipient: one(UserTable, {
    fields: [MessageTable.recipient_id],
    references: [UserTable.id],
  }),
}))

export const UserRelations = relations(UserTable, ({ many }) => ({
  messages: many(MessageTable),
}))
