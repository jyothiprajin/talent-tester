import TenentService from '../services/TenentService'
import Controller from './Controller'

class TenentController extends Controller {
  constructor() {
    super(new TenentService())
  }

  getUsers(req, res, next) {
    const { id } = req.params
    this.exec(this.service.populateRelated(id, 'results'), res, next)
  }
}

export default new TenentController()
