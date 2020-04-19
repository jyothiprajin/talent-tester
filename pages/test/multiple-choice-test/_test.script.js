export default {
  data() {
    return {
      e1: 1,
      steps: 10,
      vertical: true,
      altLabels: false,
      mcqs: [
        {
          _id: 1,
          question: `A, B and C start at the same
           time in the same direction to run around a circular stadium.
          A completes a round in 252 seconds, B in 308 seconds and c in 198 seconds,
          all starting at the same point. After what time will they again at the starting point ?`,
          options: [
            { value: `26 minutes and 18 seconds`, code: 'A' },
            { value: `42 minutes and 36 seconds`, code: 'B' },
            { value: `45 minutes`, code: 'C' },
            { value: `46 minutes and 12 seconds`, code: 'D' }
          ]
        },
        {
          _id: 2,
          question: `7, 8, 18, 57, 228, 1165, 6996`,
          options: [
            { value: `8`, code: 'A' },
            { value: `18`, code: 'B' },
            { value: `57`, code: 'C' },
            { value: `228`, code: 'D' },
            { value: '1165', code: 'E' }
          ]
        },
        {
          _id: 3,
          question: `7, 8, 18, 57, 228, 1165, 6996`,
          options: [
            { value: `8`, code: 'A' },
            { value: `18`, code: 'B' },
            { value: `57`, code: 'C' },
            { value: `228`, code: 'D' },
            { value: '1165', code: 'E' }
          ]
        },
        {
          _id: 4,
          question: `7, 8, 18, 57, 228, 1165, 6996`,
          options: [
            { value: `8`, code: 'A' },
            { value: `18`, code: 'B' },
            { value: `57`, code: 'C' },
            { value: `228`, code: 'D' },
            { value: '1165', code: 'E' }
          ]
        }
      ],
      answers: []
    }
  },
  computed: {
    ok() {
      return this.count === this.answers.length
    },
    count() {
      return this.mcqs.length
    },
    complete() {
      return this.submitedCount === this.count
    },
    submitedCount() {
      return this.answers.filter((answer) => answer.submited).length
    },
    lastQuestion() {
      return this.submitedCount + 1 === this.count
    }
  },
  mounted() {
    this.initAnswerArray()
  },
  methods: {
    initAnswerArray() {
      this.answers = this.mcqs.map((qn) => {
        return { submited: false, marked: false, answer: '', id: qn._id }
      })
    },
    submit(n) {
      this.answers[n].submited = true
      this.nextStep(n)
    },
    markForReviw(n) {
      this.answers[n].marked = true
      this.nextStep(n)
    },
    nextStep(n) {
      if (this.complete) {
        this.e1 = 0
        alert('test complete')
      } else {
        let next = n
        while (this.answers[(next = (next + 1) % this.count)].submited);
        this.e1 = next + 1
      }
    }
  }
}
