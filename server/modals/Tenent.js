import mongoose, { Schema } from 'mongoose'

const Tenent = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: 'Talent tester'
    },
    about: {
      type: String,
      required: true,
      default: 'the complte online test solution'
    },
    version: {
      type: Number,
      required: true,
      default: 1
    },
    domain: {
      type: String,
      required: true,
      default: 'localhost:3000'
    },
    theme: {
      type: String,
      required: true,
      enum: ['dark', 'light'],
      default: 'dark'
    },
    welcomeTitle: {
      type: String,
      required: true,
      default: 'welcome to talent tester'
    },
    welcomeMessage: {
      type: String,
      required: true,
      default: 'welcome to talent tester !'
    },
    copyRight: {
      type: String,
      required: true,
      default: 'Copyright ©' + new Date().getFullYear.toString()
    },
    icon: {
      type: String
    },
    subscribtions: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Subscribtion' }
    ]
  },
  {
    strict: true,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

export default mongoose.model('tenents', Tenent)
