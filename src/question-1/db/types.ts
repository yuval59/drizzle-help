import { InferModel } from 'drizzle-orm'
import { MessageTable, UserTable } from './schemas'

export type User = InferModel<typeof UserTable>
export type Message = InferModel<typeof MessageTable>
