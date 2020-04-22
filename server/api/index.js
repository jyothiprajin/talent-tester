import { Router } from 'express'
import auth from './routes/auth'
import secure from './routes/secure'
import { JWTAuth } from './middlewares/AuthMiddilware'

export default () => {
  const app = Router()
  app.use('/auth', auth())
  app.use('/', JWTAuth, secure())
  return app
}
