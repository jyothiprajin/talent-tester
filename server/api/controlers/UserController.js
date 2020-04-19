import UserService from '../services/UserService'
import Controller from './Controller'

class UserController extends Controller {
  constructor() {
    super(new UserService())
  }
}

export default new UserController()
