<template>
  <v-stepper
    v-if="ok"
    v-model="e1"
    :vertical="vertical"
    :alt-labels="altLabels"
  >
    <template v-for="(question, n) in mcqs">
      <v-stepper-step
        :key="`${n + 1}-step`"
        :complete="answers[n].submited"
        :step="n + 1"
        :editable="!answers[n].submited"
        :rules="[() => answers[n].submited || !answers[n].marked]"
      >
        Question {{ n + 1 }}
        <small>{{
          answers[n].submited
            ? 'Submitted'
            : answers[n].marked
            ? 'Marked for review'
            : 'Not attended'
        }}</small>
      </v-stepper-step>

      <v-stepper-content :key="`${n}-content`" :step="n + 1">
        <v-card class="mb-12" elevation="10" color="lighten-1">
          <v-card-text>
            <v-radio-group
              v-model="answers[n].answer"
              row
              class="justify-space-between"
              mandatory
            >
              <v-radio
                color="success"
                value="Non"
                label="None of these"
              ></v-radio>
              <v-radio
                v-for="(option, i) in question.options"
                :key="i"
                color="success"
                :value="option.code"
                :label="option.value"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="lastQuestion"
              color="error"
              @click="markForReviw(n)"
              >Mark for review
            </v-btn>
            <v-btn :disabled="lastQuestion" @click="nextStep(n)">
              Skip
            </v-btn>
            <v-btn :loading="complete" color="primary" @click="submit(n)">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>
<script>
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
        console.log('n', n)
        let next = n
        console.log('next', next)

        while (this.answers[(next = (next + 1) % this.count)].submited) {
          console.log('next', next)
        }
        this.e1 = next + 1
      }
    }
  }
}
</script>
