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
        password: '',
        confirmpassword: ''
      },
      valid: false,
      firstNameRules: [
        (v) => !!v || 'First Name is required',
        (v) =>
          (v && v.length <= 30) || 'First Name must be less than 30 characters',
        (v) =>
          (v && !this.serverError.includes('First Name')) || this.serverError
      ],
      lastNameRules: [
        (v) => !!v || 'Last Name is required',
        (v) =>
          (v && v.length <= 30) || 'Last Name must be less than 30 characters',
        (v) =>
          (v && !this.serverError.includes('Last Name')) || this.serverError
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        (v) => (v && !this.serverError.includes('E-mail')) || this.serverError
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
          alert('login success')
        })
        .catch((err) => {
          console.log(err)
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
