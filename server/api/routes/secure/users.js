import { Router } from 'express'
import UserController from '../../controlers/UserController'

export default () => {
  const route = Router()
  route.get('/user', UserController.getCurrentUser)
  return route
}
