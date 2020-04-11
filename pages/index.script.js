import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    const vm = this
    setTimeout(() => {
      vm.loading = false
    }, 1000)
  }
}
