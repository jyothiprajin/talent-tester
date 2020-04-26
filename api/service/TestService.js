import Service from './Service'
class TestService extends Service {
  constructor() {
    super('/tests')
  }
}
export default new TestService()
