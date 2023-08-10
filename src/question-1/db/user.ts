import { and, asc, between, desc, eq } from 'drizzle-orm'
import { Controller } from './controller'
import { UserTable } from './schemas'
import { User } from './types'

export class UserController extends Controller {
  static getUsers = (): Promise<User[]> =>
    this.dbInstance.query.UserTable.findMany({
      with: {
        messages: true,
      },
    }).execute()
}
