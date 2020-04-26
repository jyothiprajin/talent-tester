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
    this._getMCQS = this._getMCQS.bind(this)
    this.getMCQSWithAnswers = this.getMCQSWithAnswers.bind(this)
    this.getUserAnswers = this.getUserAnswers.bind(this)
    this.getResults = this.getResults.bind(this)
    this.publishResults = this.publishResults.bind(this)
    this.createMCQ = this.createMCQ.bind(this)
    this._createMCQ = this._createMCQ.bind(this)
  }

  getMCQS(req, res, next) {
    this.exec(this._getMCQS(req), res, next)
  }

  async _getMCQS(req) {
    const { id } = req.params
    const { user } = req
    const response = await this.service.populateRelated(id, 'mcqs')
    await this.resultservice.initTestResult(user, id)
    return response
  }

  getMCQSWithAnswers(req, res, next) {
    const { id } = req.params
    this.exec(
      this.service.populateRelated(id, 'mcqs', '+answerCode'),
      res,
      next
    )
  }

  getUserAnswers(req, res, next) {
    const { id } = req.params
    const { user } = req
    this.exec(
      this.service.populateRelated(id, 'answers', '', { user }),
      res,
      next
    )
  }

  createMCQ(req, res, next) {
    this.exec(this._createMCQ(req), res, next)
  }

  async _createMCQ(req) {
    const { id } = req.params
    const test = await this.service.get(id)
    if (!test.data) throw new NotFoundError('Test not found')
    const input = req.body
    input.test = id
    const { data } = await this.mcqsservice.create(input)
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
