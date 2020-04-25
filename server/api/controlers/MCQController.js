import MCQService from '../services/MCQService'
import Controller from './Controller'

class MCQController extends Controller {
  constructor() {
    super(new MCQService())
  }

  getAllWithAnswer(req, res, next) {
    this.exec(this.service.getAll(req.query, '+answerCode'), res, next)
  }
}

export default new MCQController()
