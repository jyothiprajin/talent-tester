import TenentService from '../services/TenentService'
import Controller from './Controller'

class TenentController extends Controller {
  constructor() {
    super(new TenentService())
  }
}

export default new TenentController()
