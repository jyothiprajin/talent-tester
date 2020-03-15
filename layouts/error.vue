<template>
  <v-app dark>
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

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
