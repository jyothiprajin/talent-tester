import mongoose, { Schema } from 'mongoose'

const Result = new Schema(
  {
    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    mark: {
      type: Number,
      default: 0
    },
    submitedAnswers: {
      type: Number,
      default: 0
    },
    markedAnswers: {
      type: Number,
      default: 0
    },
    correctAnswers: {
      type: Number,
      default: 0
    }
  },
  {
    strict: true,
    timestamps: { createdAt: 'testStartedAt' },
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

export default mongoose.model('Result', Result)
