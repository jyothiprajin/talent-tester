import Service from './Service'
import User from './../models/User'
class UserService extends Service {
  constructor() {
    super(new User().getInstance())
  }
}

export default UserService
