import Result from '../../modals/Result'
import Service from './Service'
class ResultService extends Service {
  constructor() {
    super(Result)
    this.initTestResult = this.initTestResult.bind(this)
  }

  async initTestResult(user, test) {
    const data = await this.createOrUpdate({ user, test }, {})
    return data
  }
}

export default ResultService
