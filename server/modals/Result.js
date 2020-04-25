import mongoose, { Schema } from 'mongoose'

const Result = new Schema(
  {
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test'
    },
    usertId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    mark: {
      type: String,
      required: true
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
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

export default mongoose.model('results', Result)
