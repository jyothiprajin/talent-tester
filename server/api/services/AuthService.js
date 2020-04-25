import consola from 'consola'
import jwt from 'jsonwebtoken'

import config from '../../config'
import User from '../../modals/User'
class AuthService {
  constructor() {
    this.model = User
    this.getUserByEmail = this.getUserByEmail.bind(this)
    this.getUserById = this.getUserById.bind(this)
    this.signin = this.signin.bind(this)
    this.createUser = this.createUser.bind(this)
    this.createAdmin = this.createAdmin.bind(this)
  }

  async getUserByEmail(email, select = '') {
    const user = await this.model.findOne({ email }).select(select)
    return user
  }

  async getUserById(id) {
    const user = await this.model.findById(id)
    return user
  }

  signin(userId) {
    const token = jwt.sign(userId, config.jwtSecret)
    consola.info(`new token ${token} issues for user id  ${userId}`)
    return { token }
  }

  async createUser(input) {
    delete input.isAdmin
    delete input.emailVerified
    const data = await this.model.create(input)
    return { data }
  }

  async createAdmin(input) {
    input.isAdmin = true
    const data = await this.model.create(input)
    return { data }
  }
}

export default AuthService
