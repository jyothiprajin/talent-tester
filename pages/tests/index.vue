<template>
  <v-card class="mx-auto" tile>
    <v-list :three-line="true">
      <v-subheader>Available Online tests</v-subheader>
      <v-list-item-group v-model="active" color="primary">
        <v-list-item
          v-for="t in tests"
          :key="t.id"
          :value="t.id"
          :to="`/tests/${t.id}`"
        >
          <v-list-item-avatar>
            <v-icon class="blue white--text">call_to_action</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="t.name"></v-list-item-title>
            <v-list-item-subtitle v-html="t.description"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text
              v-text="t.duration + 'min'"
            ></v-list-item-action-text>
            <v-icon color="grey lighten-1">
              mdi-clock
            </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
import TestService from '../../api/service/TestService'
export default {
  data() {
    return {
      tests: [],
      active: ''
    }
  },
  computed: {
    test() {
      return this.$store.state.tests.active
    }
  },
  async created() {
    if (this.test) {
      this.$router.push(`/tests/${this.test}`)
    }
    await TestService.getAll().then(
      (res) => {
        this.tests = res.results
      },
      (err) => {
        console.error(err)
      }
    )
  }
}
</script>
