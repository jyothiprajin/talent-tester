import mongoose, { Schema } from 'mongoose'

const SubscribtionList = new Schema(
  {
    tenent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenent'
    },
    subscribtion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subscribtion'
    },
    expire: {
      type: Date,
      required: true,
      default: new Date(new Date().setMonth(new Date().getMonth() + 1))
    }
  },
  {
    strict: true,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)
export default mongoose.model('SubscribtionList', SubscribtionList)
