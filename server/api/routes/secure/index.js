import { Router } from 'express'
import users from './users'

export default () => {
  const route = Router()
  route.use('/users', users)
  return route
}
