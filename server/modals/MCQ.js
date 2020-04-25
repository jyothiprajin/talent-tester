import mongoose, { Schema } from 'mongoose'

const MCQ = new Schema(
  {
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test'
    },
    question: {
      type: String,
      required: true
    },
    option: {
      type: [
        {
          value: String,
          code: String
        }
      ],
      required: true,
      default: []
    },
    answerCode: {
      type: String,
      required: true,
      select: false
    },
    duration: {
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

export default mongoose.model('mcqs', MCQ)
