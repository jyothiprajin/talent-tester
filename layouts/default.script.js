export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Start',
          to: '/test/start'
        }
      ],
      title: process.env.APP
    }
  }
}
