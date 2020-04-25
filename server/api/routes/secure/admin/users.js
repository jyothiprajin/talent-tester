import { Router } from 'express'
import UserController from '../../../controlers/UserController'
export default () => {
  const route = Router()
  route.get('/:id/results', UserController.get)
  route.get('/', UserController.getAll)
  route.get('/:id', UserController.get)
  route.put('/:id', UserController.update)
  route.delete('/:id', UserController.delete)

  return route
}
