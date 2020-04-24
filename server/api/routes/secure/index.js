import { Router } from 'express'
import { AdminJWTAuth } from '../../middlewares/AuthMiddilware'
import users from './users'
export default () => {
  const route = Router()
  route.use('/users', AdminJWTAuth, users())
  return route
}
