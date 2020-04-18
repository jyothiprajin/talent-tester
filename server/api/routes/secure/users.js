import { Router } from 'express'
import UserController from './../src/controllers/UserController'

export default () => {
  const route = Router()
  route.get('/user', UserController.getCurrentUser)
  return route
}
