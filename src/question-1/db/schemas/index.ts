export { MessageTable } from './message'
export { UserTable } from './user'

import { MessageTable } from './message'
import { UserTable } from './user'

import { MessageRelations, UserRelations } from './relations'

export const schema = {
  MessageTable,
  MessageRelations,

  UserTable,
  UserRelations,
}
