import TestService from '../services/TestService'
import ResultService from '../services/ResultService'
import Controller from './Controller'

class TestController extends Controller {
  constructor() {
    super(new TestService())
    this.resultservice = new ResultService()
    this.mcqsservice = new ResultService()
    this.getMCQS = this.getMCQS.bind(this)
    this.getResults = this.getResults.bind(this)
    this.publishResults = this.publishResults.bind(this)
  }

  getMCQS(req, res, next) {
    const { id } = req.params
    this.exec(this.service.populateRelated(id, 'mcqs'), res, next)
  }

  createMCQS(req, res, next) {
    const { id } = req.params
    this.exec(this.service.populateRelated(id, 'mcqs'), res, next)
  }

  getResults(req, res, next) {
    const { id } = req.params
    this.exec(this.service.populateRelated(id, 'results'), res, next)
  }

  publishResults(req, res, next) {
    const { id } = req.params
    this.exec(this.service.populateRelated(id, 'results'), res, next)
  }
}

export default new TestController()
