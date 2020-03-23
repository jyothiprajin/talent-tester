<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    label="Full Name"
                    name="name"
                    prepend-icon="person"
                    type="text"
                    required
                    :rules="nameRules"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="e-mail"
                    name="email"
                    prepend-icon="email"
                    type="text"
                    required
                    :rules="emailRules"
                  ></v-text-field>

                  <v-text-field
                    v-model="phone"
                    label="Mobile Number"
                    name="phone"
                    prepend-icon="phone"
                    type="text"
                    required
                    :rules="phoneRules"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    :rules="passwordRules"
                  ></v-text-field>
                  <v-text-field
                    id="confirmpassword"
                    v-model="confirmpassword"
                    label="Confirm Password"
                    name="confirmpassword"
                    prepend-icon="lock"
                    type="password"
                    :rules="confirmpasswordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn to="/login">Login</v-btn>
                <v-btn color="primary" @click="validate">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  layout: 'empty',
  data() {
    return {
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
        (v) =>
          this.password === v || 'Confirm Password must match with password'
      ]
    }
  },
  mounted() {},
  methods: {
    validate() {
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
</script>
