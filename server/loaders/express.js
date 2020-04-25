import cors from 'cors'
import express from 'express'
import routes from '../api/routes'
import config from '../config'
import { NotFoundError, ServerError } from '../lib/Error'
export default ({ app }) => {
  /**
   * Health Check endpoints
   */
  app.get('/status', (req, res) => {
    res.status(200).end()
  })
  app.head('/status', (req, res) => {
    res.status(200).end()
  })

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy')

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors())

  // Middleware that transforms the raw string of req.body into json
  app.use(express.json())

  // Load API routes
  app.use(config.api.prefix, routes())
  // catch 404 and forward to error handler
  app.all(`${config.api.prefix}/**`, (req, res, next) => {
    next(new NotFoundError('Url not found'))
  })
  // server error handler
  app.use((err, req, res, next) => {
    if (err) {
      if (!err.status) err = new ServerError(err) // default internal server error
      return res.status(err.status).json(err)
    }
    next()
  })
}
