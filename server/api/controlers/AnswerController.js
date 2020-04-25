import AnswerService from '../services/AnswerService'
import Controller from './Controller'

class AnswerController extends Controller {
  constructor() {
    super(new AnswerService())
  }
}

export default new AnswerController()
