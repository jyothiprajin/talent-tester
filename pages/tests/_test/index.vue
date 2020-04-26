<template>
  <v-row align="center" justify="center">
    <v-card class="mx-auto" outlined min-width="80%">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4" v-text="overline"></div>
          <v-list-item-title
            class="headline mb-1"
            v-text="test.name"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-text="test.description"
          ></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn>Back</v-btn>
        <v-btn color="primary">Start</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  validate({ params }) {
    // Must be a number
    return /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(params.test)
  },
  data() {
    return {
      test: {}
    }
  },
  computed: {
    overline() {
      if (this.test.endDate)
        return `ends on ${new Date(this.test.endDate).toLocaleDateString()}`
      return ''
    }
  },
  async created() {
    await this.getTest(this.$route.params.test).then(
      (res) => {
        this.test = res
        console.error(res)
      },
      (err) => {
        console.error(err)
      }
    )
  },
  methods: {
    ...mapActions('tests', ['getTest'])
  }
}
</script>
