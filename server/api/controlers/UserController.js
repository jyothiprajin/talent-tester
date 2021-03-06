import UserService from '../services/UserService'
import Controller from './Controller'

class UserController extends Controller {
  constructor() {
    super(new UserService())
  }

  getResults(req, res, next) {
    const { id } = req.params
    this.exec(this.service.populateRelated(id, 'results'), res, next)
  }
}

export default new UserController()
