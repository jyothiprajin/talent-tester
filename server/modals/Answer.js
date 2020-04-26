import mongoose, { Schema } from 'mongoose'

const Answer = new Schema(
  {
    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    mcq: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MCQ',
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    submited: {
      type: Boolean,
      default: false
    },
    marked: {
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

export default mongoose.model('Answer', Answer)
