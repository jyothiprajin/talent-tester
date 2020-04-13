import AuthService from '../services/AuthService'

class AuthController {
  constructor() {
    this.service = new AuthService()
    this.register = this.register.bind(this)
    this.getCurrentUser = this.getCurrentUser.bind(this)
  }

  signin(req, res) {
    const response = this.service.signin(req.body)
    return response.send(res)
  }

  async register(req, res) {
    const response = await this.service.register(req.body)
    return response.send(res)
  }

  async getCurrentUser(req, res) {
    const response = await this.service.get(req.user)
    return response.send(res)
  }
}

export default new AuthController()
