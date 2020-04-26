import MCQService from '../services/MCQService'
import AnswerService from '../services/AnswerService'
import { NotFoundError } from '../../lib/Error'
import Controller from './Controller'
class MCQController extends Controller {
  constructor() {
    super(new MCQService())
    this.answerservice = new AnswerService()
    this._addAnswer = this._addAnswer.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.getAllWithAnswer = this.getAllWithAnswer.bind(this)
  }

  addAnswer(req, res, next) {
    this.exec(this._addAnswer(req), res, next)
  }

  async _addAnswer(req) {
    const { id } = req.params
    const { user } = req
    const mcq = (await this.service.get(id)).data
    if (!mcq) throw new NotFoundError('Test not found')
    const find = { mcq, user, test: mcq.test }
    const { data } = await this.answerservice.createOrUpdate(find, {
      ...req.body,
      ...find
    })
    return { data }
  }

  getAllWithAnswer(req, res, next) {
    this.exec(this.service.getAll(req.query, '+answerCode'), res, next)
  }
}

export default new MCQController()
