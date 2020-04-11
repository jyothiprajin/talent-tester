export default {
  layout: 'empty',
  data() {
    return {
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length > 8) || 'Password must be greater than 8 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  mounted() {},
  methods: {
    submit() {
      this.$refs.form.validate()
    }
  },
  head() {
    const title = 'Login'
    return {
      title
    }
  }
}
