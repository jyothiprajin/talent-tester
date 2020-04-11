export default {
  auth: 'guest',
  layout: 'empty',
  data() {
    return {
      valid: false,
      login: {
        email: '',
        password: ''
      },
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length > 8) || 'Password must be greater than 8 characters'
      ],
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
      if (this.valid) {
        this.userLogin()
      }
    },
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login
        })
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    }
  },
  head() {
    const title = 'Login'
    return {
      title
    }
  }
}
