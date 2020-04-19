export default (schema, options) => {
  schema.pre('save', (next) => {
    const field = options.field || 'RegisterNo'
    const doc = this
    schema.count(
      { registerYear: new Date().getUTCFullYear() },
      (err, count) => {
        if (err) next(err)
        doc[field] = count
        next()
      }
    )
  })
}
