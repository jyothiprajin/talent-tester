<template>
  <v-app>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 class="text-center">
        <h1 class="display-3">
          {{ error.statusCode === 404 ? pageNotFound : otherError }}
        </h1>
        <NuxtLink to="/" class="title">Home page</NuxtLink>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script src="./error.script.js"></script>
