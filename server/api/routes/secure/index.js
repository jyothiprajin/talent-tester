import { Router } from 'express'
import { AdminJWTAuth } from '../../middlewares/AuthMiddilware'
import tests from './tests'
import mcqs from './mcqs'
import results from './results'
import admin from './admin'
export default () => {
  const route = Router()
  route.use('/tests', tests())
  route.use('/mcqs', mcqs())
  route.use('/results', results())
  route.use('/admin', AdminJWTAuth, admin())
  return route
}
