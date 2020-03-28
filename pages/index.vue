<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to {{ 'talent tester' }}
        </v-card-title>
        <v-card-text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            nisi? Voluptatum possimus repellendus, iste quas corrupti ducimus
            fugit alias? Saepe impedit cupiditate facilis explicabo rerum vitae
            quasi recusandae modi tenetur?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            voluptatem accusamus veritatis, quo sequi molestias, dolor velit
            eius excepturi facere rerum impedit magni laudantium minus ducimus
            amet delectus reprehenderit facilis.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
