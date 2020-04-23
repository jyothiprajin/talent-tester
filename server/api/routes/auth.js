import { Router } from 'express'
import AuthController from '../controlers/AuthController'
import { LocalAuth, JWTAuth, AdminJWTAuth } from '../middlewares/AuthMiddilware'
import { NotFoundError } from '../../lib/Error'
export default () => {
  const route = Router()
  route.post('/register', AuthController.register)
  route.post('/register-admin', AdminJWTAuth, AuthController.registerAdmin)
  route.post('/login', LocalAuth, AuthController.signin)
  route.post('/user', JWTAuth, AuthController.getCurrentUser)
  route.all('/**', (req, res, next) => {
    next(new NotFoundError('Url not found'))
  })
  return route
}
