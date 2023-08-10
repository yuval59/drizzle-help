import { writeFileSync } from 'fs'
import { exit } from 'process'
import { UserController } from './db'

const run = async () => {
  const users = await UserController.getUsers()
  console.log(JSON.stringify(users, null, 2))
  exit()
}

run()
