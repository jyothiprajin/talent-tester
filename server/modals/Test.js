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
    mcqs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'mcqs' }],
    results: [{ type: mongoose.Schema.Types.ObjectId, ref: 'results' }],
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

export default mongoose.model('tests', Test)
