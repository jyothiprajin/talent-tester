export default {
  layout: 'empty',
  auth: 'guest',
  data() {
    return {
      serverError: '',
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      valid: false,
      firstNameRules: [
        (v) => !!v || 'First Name is required',
        (v) =>
          (v && v.length <= 30) || 'First Name must be less than 30 characters',
        (v) =>
          (v && !this.serverError.includes('firstName')) || this.serverError
      ],
      lastNameRules: [
        (v) => !!v || 'Last Name is required',
        (v) =>
          (v && v.length <= 30) || 'Last Name must be less than 30 characters',
        (v) => (v && !this.serverError.includes('lastName')) || this.serverError
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        (v) => (v && !this.serverError.includes('email')) || this.serverError
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length > 8) || 'Password must be greater than 8 characters',
        (v) => (v && !this.serverError.includes('password')) || this.serverError
      ],
      confirmpasswordRules: [
        (v) => !!v || 'Confirm Password is required',
        (v) =>
          this.register.password === v ||
          'Confirm Password must match with password',
        (v) => (v && !this.serverError.includes('password')) || this.serverError
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
        this.userRegister()
      }
    },
    userRegister() {
      this.$auth
        .register({
          data: this.register
        })
        .then((response) => {
          this.$auth
            .loginWith('local', {
              data: this.register
            })
            .then((response) => {})
            .catch((err) => {
              this.serverError = err.response.data.message
              this.$refs.form.validate()
            })
        })
        .catch((err) => {
          this.serverError = err.response.data.message
          this.$refs.form.validate()
        })
    }
  },
  head() {
    const title = 'Register'
    return {
      title
    }
  }
}
