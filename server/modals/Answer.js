import mongoose, { Schema } from 'mongoose'

const Answer = new Schema(
  {
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test'
    },
    usertId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    mcqId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MCQ'
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

export default mongoose.model('answers', Answer)
