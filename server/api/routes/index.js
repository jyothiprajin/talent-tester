import { Router } from 'express'
import { JWTAuth } from '../middlewares/AuthMiddilware'
import auth from './auth'
import secure from './secure'

export default () => {
  const app = Router()
  app.use('/auth', auth())
  app.use('/', JWTAuth, secure())
  return app
}
