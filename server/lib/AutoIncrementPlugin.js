import User from '../modals/User'
export default (schema, options = {}) => {
  schema.pre('save', (next) => {
    const field = options.field || 'RegisterNo'
    const doc = this
    User.countDocuments(
      { registerYear: new Date().getUTCFullYear() },
      (err, count) => {
        if (err) next(err)
        doc[field] = count
        next()
      }
    )
  })
}
