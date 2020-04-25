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
      required: true,
      immutable: true
    },
    submitedAnswers: {
      type: Number,
      default: 0,
      immutable: true
    },
    markedAnswers: {
      type: Number,
      default: 0,
      immutable: true
    },
    correctAnswers: {
      type: Number,
      default: 0,
      immutable: true
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
