import { Router } from 'express'
import { AdminJWTAuth } from '../../middlewares/AuthMiddilware'
import users from './users'
import admin from './admin'
export default () => {
  const route = Router()
  route.use('/admin', AdminJWTAuth, admin())
  route.use('/tests', users())
  route.use('/results', users())
  return route
}
