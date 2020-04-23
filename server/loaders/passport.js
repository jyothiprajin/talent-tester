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
      async (email, password, done) => {
        const user = await new AuthService().getUserByEmail(
          email,
          '+hashedPassword +salt'
        )
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

  const jwtCallBack = (payload, done, isAdmin = false) => {
    if (payload) {
      const user = new AuthService().getUserById(payload)
      if (user == null) {
        return done(new UnauthorizedError('bearer token invalid/expired'))
      }
      if (isAdmin !== user.isAdmin) {
        return done(new UnauthorizedError("you don't have access to this "))
      }
      return done(null, payload)
    }
    return done(new UnauthorizedError('bearer token invalid/expired'))
  }

  const opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
  opts.secretOrKey = config.jwtSecret
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      jwtCallBack(payload, done)
    })
  )
  passport.use(
    'admin-jwt',
    new JwtStrategy(opts, (payload, done) => {
      jwtCallBack(payload, done, true)
    })
  )
}
