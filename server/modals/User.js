import crypto from 'crypto'
import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import AutoIncrementPlugin from '../lib/AutoIncrementPlugin'
const User = new Schema(
  {
    tenent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenent',
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      immutable: true
    },
    hashedPassword: {
      type: String,
      required: true,
      select: false
    },
    salt: {
      type: String,
      required: true,
      select: false
    },
    registerYear: {
      type: Number,
      default: new Date().getUTCFullYear(),
      required: true
    },
    registerNo: {
      type: Number,
      default: 0,
      required: true,
      immutable: true
    },
    isAdmin: {
      type: Boolean,
      default: false,
      immutable: true
    },
    emailVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    strict: true,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)
User.methods.encryptPassword = function(password) {
  return crypto
    .pbkdf2Sync(
      Buffer.from(password, 'binary'),
      Buffer.from(this.salt, 'binary'),
      10000,
      512,
      'sha512'
    )
    .toString('hex')
}

User.virtual('userId').get(function() {
  return this.id
})

User.virtual('password')
  .set(function(password) {
    this._plainPassword = password
    this.salt = crypto.randomBytes(128).toString('hex')
    this.hashedPassword = this.encryptPassword(password)
  })
  .get(function() {
    return this._plainPassword
  })

User.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword
}
User.plugin(uniqueValidator, { message: '{PATH} already exists' })
User.plugin(AutoIncrementPlugin)

User.virtual('results', {
  ref: 'Result', // The model to use
  localField: '_id',
  foreignField: 'user'
})
export default mongoose.model('User', User)
