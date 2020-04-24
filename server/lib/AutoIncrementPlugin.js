import User from '../modals/User'
export default (schema, options = {}) => {
  schema.pre('save', function(next) {
    const field = options.field || 'registerNo'
    const doc = this
    const year = new Date().getUTCFullYear()
    User.countDocuments({ registerYear: year }, (err, count) => {
      if (err) next(err)
      doc[field] = `${year}${String(count).padStart(4, '0')}`
      next()
    })
  })
}
