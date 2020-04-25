import ResultService from '../services/ResultService'
import Controller from './Controller'

class ResultController extends Controller {
  constructor() {
    super(new ResultService())
  }
}

export default new ResultController()
