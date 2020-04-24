import AuthService from '../services/AuthService'
import { BadRequestError } from '../../lib/Error'
class AuthController {
  constructor() {
    this.service = new AuthService()
    this.signin = this.signin.bind(this)
    this.register = this.register.bind(this)
    this.registerAdmin = this.registerAdmin.bind(this)
    this.getCurrentUser = this.getCurrentUser.bind(this)
    this.exec = this.exec.bind(this)
  }

  signin(req, res) {
    this.service.signin(req.user).send(res)
  }

  register(req, res, next) {
    this.exec(this.service.createUser(req.body), res, next)
  }

  registerAdmin(req, res, next) {
    this.exec(this.service.createAdmin(req.body), res, next)
  }

  getCurrentUser(req, res, next) {
    this.exec(this.service.getUser(req.user), res, next)
  }

  async exec(proces, res, next) {
    await proces.then(
      (response) => {
        return response.send(res)
      },
      (err) => {
        next(new BadRequestError(err.message))
      }
    )
  }
}

export default new AuthController()
