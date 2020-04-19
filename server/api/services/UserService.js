import User from '../../modals/User'
import Service from './Service'
class UserService extends Service {
  constructor() {
    super(User)
  }
}

export default UserService
