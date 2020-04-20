export default function({ $auth }) {
  $auth.register = async (payload) => {
    const { register } = $auth.strategies.local.options.endpoints
    console.log($auth.strategies.local)
    console.log(register)
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
