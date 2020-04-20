import apiClient from '../apiClient'
class AuthService {
  constructor() {
    this.resource = 'auth'
    this.register = this.register.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  register(payload) {
    return apiClient.$post(`/${this.resource}`, payload)
  }

  updatePassword(payload) {
    return apiClient.$put(`/${this.resource}/password`, payload)
  }

  updateUser(payload) {
    return apiClient.$put(`/${this.resource}/user`, payload)
  }
}
export default new AuthService()
