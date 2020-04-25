import { Router } from 'express'
import AuthController from '../controlers/AuthController'
import { LocalAuth, JWTAuth, AdminJWTAuth } from '../middlewares/AuthMiddilware'
import { AppendTenentId } from '../middlewares/TenentMiddilware'
import { NotFoundError } from '../../lib/Error'
export default () => {
  const route = Router()
  route.post('/register', AppendTenentId, AuthController.register)
  route.post(
    '/register-admin',
    AdminJWTAuth,
    AppendTenentId,
    AuthController.registerAdmin
  )
  route.post('/login', LocalAuth, AuthController.signin)
  route.get('/user', JWTAuth, AuthController.getCurrentUser)
  route.all('/**', (req, res, next) => {
    next(new NotFoundError('Url not found'))
  })
  return route
}
