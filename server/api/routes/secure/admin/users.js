import { Router } from 'express'
import AuthController from '../../../controlers/AuthController'
import UserController from '../../../controlers/UserController'
import { AppendTenentId } from '../../../middlewares/TenentMiddilware'
export default () => {
  const route = Router()
  route.get('/:id/results', UserController.get)
  route.get('/', UserController.getAll)
  route.post('/', AppendTenentId, AuthController.addAdmin)
  route.get('/:id', UserController.get)
  route.put('/:id', UserController.update)
  route.delete('/:id', UserController.delete)

  return route
}
