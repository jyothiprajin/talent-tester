export const state = () => ({
  mcqs: [],
  answers: []
})

export const mutations = {
  setMCQS(state, mcqs) {
    state.mcqs = mcqs
  },
  setAnswers(state, answers) {
    state.answers = answers
  }
}
