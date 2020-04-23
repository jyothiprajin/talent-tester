import passport from 'passport'

export const JWTAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false, failWithError: true })(
    req,
    res,
    next
  )
}
export const AdminJWTAuth = (req, res, next) => {
  passport.authenticate('admin-jwt', { session: false, failWithError: true })(
    req,
    res,
    next
  )
}
export const LocalAuth = (req, res, next) => {
  passport.authenticate('local', { session: false, failWithError: true })(
    req,
    res,
    next
  )
}
