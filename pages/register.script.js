export default {
  layout: 'empty',
  auth: 'guest',
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 30) || 'Name must be less than 30 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: '',
      phoneRules: [
        (v) => !!v || 'Mobile Number is required',
        (v) =>
          /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v) || 'Mobile Number must be valid'
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length > 8) || 'Password must be greater than 8 characters'
      ],
      confirmpassword: '',
      confirmpasswordRules: [
        (v) => !!v || 'Confirm Password is required',
        (v) =>
          this.password === v || 'Confirm Password must match with password'
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
    const title = 'Register'
    return {
      title
    }
  }
}
