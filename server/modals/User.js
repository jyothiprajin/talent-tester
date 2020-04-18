import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

class User {
  initSchema() {
    const User = new Schema(
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        hashedPassword: {
          type: String,
          required: true
        },
        salt: {
          type: String,
          required: true
        },
        register_date: { type: Date, default: Date.now, required: true },
        permissions: {
          contributor: { type: Array },
          reader: { type: Array }
        },
        photo: { type: String, required: false },
        title: { type: String, required: false },
        bio: { type: String, required: false },
        userSetting: {
          type: Object,
          dark: { type: Boolean },
          drawer: { type: Boolean }
        }
      },
      { strict: true }
    )
    User.methods.encryptPassword = (password) => {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
      // more secure – return crypto.pbkdf2Sync(password, this.salt, 10000, 512);
    }

    User.virtual('userId').get(() => {
      return this.id
    })

    User.virtual('password')
      .set(function(password) {
        this._plainPassword = password
        this.salt = crypto.randomBytes(32).toString('hex')
        // more secure - this.salt = crypto.randomBytes(128).toString('hex');
        this.hashedPassword = this.encryptPassword(password)
      })
      .get(function() {
        return this._plainPassword
      })

    User.methods.checkPassword = (password) => {
      return this.encryptPassword(password) === this.hashedPassword
    }
    User.plugin(uniqueValidator)
    return mongoose.model('users', User)
  }

  getInstance() {
    return this.initSchema()
  }
}

export default User
