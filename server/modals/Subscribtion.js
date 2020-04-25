import mongoose, { Schema } from 'mongoose'

const Subscribtion = new Schema(
  {
    tenentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenent'
    },
    name: {
      type: String,
      required: true,
      default: 'MCQ'
    },
    about: {
      type: String,
      required: true,
      default: 'option for creating Multiple choice Questions'
    },
    cost: {
      type: String,
      required: true,
      default: 0
    },
    recuring: {
      type: String,
      required: true,
      default: 'Monthly'
    }
  },
  {
    strict: true,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

export default mongoose.model('subscribtions', Subscribtion)
