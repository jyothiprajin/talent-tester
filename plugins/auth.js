export default function({ $auth }) {
  $auth.register = async (payload) => {
    const { register } = $auth.strategies.local.options.endpoints
    if (!register) {
      return Promise.resolve()
    }
    try {
      const { response } = await $auth.request(payload, register, true)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
