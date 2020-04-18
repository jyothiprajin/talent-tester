import UserService from '../services/UserService'
import Controller from './Controller'

class UserController extends Controller {
  constructor() {
    super(new UserService())
    this.getCurrentUser = this.getCurrentUser.bind(this)
  }

  async getCurrentUser(req, res) {
    const { userId } = req.user
    const response = await this.service.get(userId)
    return response.send(res)
  }
}

export default new UserController()
