import TestService from '../services/TestService'
import ResultService from '../services/ResultService'
import MCQService from '../services/MCQService'
import { NotFoundError } from '../../lib/Error'
import Controller from './Controller'

class TestController extends Controller {
  constructor() {
    super(new TestService())
    this.resultservice = new ResultService()
    this.mcqsservice = new MCQService()
    this.getMCQS = this.getMCQS.bind(this)
    this.getResults = this.getResults.bind(this)
    this.publishResults = this.publishResults.bind(this)
    this.createMCQ = this.createMCQ.bind(this)
    this._createMCQ = this._createMCQ.bind(this)
  }

  getMCQS(req, res, next) {
    const { id } = req.params
    this.exec(this.service.populateRelated(id, 'mcqs'), res, next)
  }

  createMCQ(req, res, next) {
    this.exec(this._createMCQ(req), res, next)
  }

  async _createMCQ(req) {
    const { id } = req.params
    const test = await this.service.get(id)
    if (!test.data) throw new NotFoundError('Item not found')
    const input = req.body
    input.testId = id
    const { data } = await this.mcqsservice.create(input)
    if (data) test.data.mcqs.push(data)
    test.data.save()
    return { data }
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
