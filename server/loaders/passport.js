import { Strategy as LocalStrategy } from 'passport-local'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import passport from 'passport'
import { UnauthorizedError } from '../lib/Error'
import AuthService from '../api/services/AuthService'
import config from '../config'
export default () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      (email, password, done) => {
        const user = new AuthService().getUserByEmail(email)
        if (user == null) {
          return done(new UnauthorizedError('Invalid email-address'))
        }
        if (!user.checkPassword(password)) {
          return done(new UnauthorizedError('Invalid password'))
        }
        return done(null, user.userId, 'Login Success')
      }
    )
  )
  const opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
  opts.secretOrKey = config.jwtSecret
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      if (payload) {
        const user = new AuthService().getUserById(payload)
        if (user == null) {
          return done(new UnauthorizedError('bearer token invalid/expired'))
        }
        return done(null, payload)
      }
      return done(new UnauthorizedError('bearer token invalid/expired'))
    })
  )
}
