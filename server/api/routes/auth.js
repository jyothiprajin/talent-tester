import { Router } from 'express'
import AuthController from '../controlers/AuthController'
import { LocalAuth } from '../middlewares/AuthMiddilware'
import { NotFoundError } from '../../lib/Error'
export default () => {
  const route = Router()
  route.post('/register', AuthController.register)
  route.post('/login', LocalAuth, AuthController.signin)
  route.post('/user', LocalAuth, AuthController.getCurrentUser)
  route.all('/**', (req, res, next) => {
    next(new NotFoundError('Url not found'))
  })
  return route
}
