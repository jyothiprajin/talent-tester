import TestService from '../services/TestService'
import Controller from './Controller'

class TestController extends Controller {
  constructor() {
    super(new TestService())
  }

  getResults(req, res, next) {
    const { id } = req.params
    this.exec(this.service.populateRelated(id, 'results'), res, next)
  }
}

export default new TestController()
