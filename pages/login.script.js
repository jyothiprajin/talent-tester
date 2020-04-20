export default {
  auth: 'guest',
  layout: 'empty',
  data() {
    return {
      valid: false,
      serverError: '',
      login: {
        email: '',
        password: ''
      },
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length > 8) || 'Password must be greater than 8 characters',
        (v) => (v && !this.serverError.includes('password')) || this.serverError
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        (v) => (v && !this.serverError.includes('email')) || this.serverError
      ]
    }
  },
  methods: {
    resetError() {
      this.serverError = ''
    },
    submit() {
      this.$refs.form.validate()
      if (this.valid) {
        this.userLogin()
      }
    },
    userLogin() {
      this.$auth
        .login({
          data: this.login
        })
        .then((response) => {
          alert('login success')
        })
        .catch((err) => {
          this.serverError = err.response.data.message
          this.$refs.form.validate()
        })
    }
  },
  head() {
    const title = 'Login'
    return {
      title
    }
  }
}
