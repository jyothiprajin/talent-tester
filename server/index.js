const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
// passport for auth

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const jwt = require('jsonwebtoken')
require('express-jsend')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      if (email !== 'a@a.com') {
        return done(new Error('Invalid username'))
      }
      if (password !== 'mypassword') {
        return done(new Error('invalid password'))
      }
      done(null, email, 'Login Success')
    }
  )
)
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_SECRET_OR_KEY
passport.use(
  new JwtStrategy(opts, function(payload, done) {
    if (payload) {
      return done(null, payload)
    }
    return done(new Error('bearer token invalid/expired'))
  })
)
app.use(express.json())

app.post('/api/auth/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (error, user, info) => {
    if (error) return res.status(401).jerror(401, error.message)
    if (!user) return res.status(400).jerror(400, info.message)
    const token = jwt.sign(user, process.env.JWT_SECRET_OR_KEY)
    return res.json({ token })
  })(req, res, next)
})

const middleware = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user, info) => {
    if (error) return res.status(401).jerror(401, error.message)
    if (!user) return res.status(400).jerror(400, info.message)
    next(user)
  })(req, res, next)
}
app.get('/api/auth/user', middleware, (req, res) => {
  // return res.json({ user: req.user })
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('URL Not Found')
  err.status = 404
  next(err)
})
//  error handler
app.use(function(err, req, res, next) {
  const status = err.status || 500
  res.status(status).jerror(status, err.message)
  next()
})

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
