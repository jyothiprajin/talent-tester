import consola from 'consola'
import jwt from 'jsonwebtoken'
import Response from '../../lib/Response'
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
    return new Response({ token })
  }

  async createUser(data) {
    delete data.isAdmin
    const item = await this.model.create(data)
    return new Response({ item }, 201)
  }

  async createAdmin(data) {
    data.isAdmin = true
    const item = await this.model.create(data)
    return new Response({ item }, 201)
  }
}

export default AuthService
