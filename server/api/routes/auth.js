import { Router } from 'express'
import AuthController from '../controlers/AuthController'
import { LocalAuth } from '../middlewares/AuthMiddilware'

export default () => {
  const route = Router()
  route.post('/register', AuthController.register)
  route.post('/login', LocalAuth, AuthController.signin)
}
