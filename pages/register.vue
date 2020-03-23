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
                <v-form ref="form" autocomplete="off">
                  <v-text-field
                    label="Full Name"
                    name="name"
                    prepend-icon="person"
                    type="text"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="e-mail"
                    name="email"
                    prepend-icon="email"
                    type="text"
                    required
                  ></v-text-field>

                  <v-text-field
                    label="Mobile Number"
                    name="phone"
                    prepend-icon="phone"
                    type="text"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="confirmpassword"
                    label="Confirm Password"
                    name="confirmpassword"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
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
    return {}
  },
  mounted() {},
  methods: {},
  head() {
    const title = 'Register'
    return {
      title
    }
  }
}
</script>
