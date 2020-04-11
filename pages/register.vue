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
                <v-form
                  id="register-form"
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="submit"
                >
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
                <v-btn color="primary" type="submit" form="register-form"
                  >Register</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script src="./register.script.js"></script>
