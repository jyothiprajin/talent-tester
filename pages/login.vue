<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form
                  id="login-form"
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="submit"
                  @input="resetError"
                >
                  <v-text-field
                    v-model="login.email"
                    label="e-mail"
                    name="email"
                    prepend-icon="person"
                    type="text"
                    required
                    :rules="emailRules"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="login.password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn to="/register">Register</v-btn>
                <v-btn color="primary" form="login-form" type="submit"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script src="./login.script"></script>
