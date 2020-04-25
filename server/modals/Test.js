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
    mcqs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MCQ' }],
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    starDate: {
      type: Date,
      required: true,
      default: new Date()
    },
    endDate: {
      type: Date,
      required: true,
      default: new Date()
    },
    duration: {
      type: Number,
      required: true
    },
    timer: {
      type: Number,
      required: true,
      default: false
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

export default mongoose.model('tests', Test)
