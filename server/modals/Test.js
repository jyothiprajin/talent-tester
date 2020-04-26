import mongoose, { Schema } from 'mongoose'

const Test = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    starDate: {
      type: Date,
      required: true,
      default: new Date()
    },
    endDate: {
      type: Date,
      required: true,
      default: new Date(new Date().setMonth(new Date().getMonth() + 1))
    },
    duration: {
      type: Number,
      required: true
    },
    timer: {
      type: Number,
      required: true,
      default: 0
    },
    failOnFocusOut: {
      type: Boolean,
      required: true,
      default: false
    },
    showSummary: {
      type: Boolean,
      required: true,
      default: true
    },
    publishResult: {
      type: Boolean,
      required: true,
      default: false
    },
    showRanklist: {
      type: Boolean,
      required: true,
      default: false
    },
    showGraph: {
      type: Boolean,
      required: true,
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
Test.virtual('mcqs', {
  ref: 'MCQ', // The model to use
  localField: '_id',
  foreignField: 'test'
})
Test.virtual('results', {
  ref: 'Result', // The model to use
  localField: '_id',
  foreignField: 'test'
})
Test.virtual('answers', {
  ref: 'Answer', // The model to use
  localField: '_id',
  foreignField: 'test'
})
export default mongoose.model('Test', Test)
