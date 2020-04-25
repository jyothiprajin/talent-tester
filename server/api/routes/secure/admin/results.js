import { Router } from 'express'
import UserController from '../../../controlers/UserController'
export default () => {
  const route = Router()
  route.get('/users', UserController.getAll)
  route.get('/users/:id', UserController.get)
  route.put('/users/:id', UserController.update)
  route.delete('/users/:id', UserController.delete)
  route.get('/users/:id/results', UserController.get)
  return route
}
