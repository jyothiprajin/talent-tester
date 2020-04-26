import AuthService from '../services/AuthService'
import { BadRequestError } from '../../lib/Error'
import Response from '../../lib/Response'
class AuthController {
  constructor() {
    this.service = new AuthService()
    this.signin = this.signin.bind(this)
    this.register = this.register.bind(this)
    this.addAdmin = this.addAdmin.bind(this)
    this.getCurrentUser = this.getCurrentUser.bind(this)
    this.exec = this.exec.bind(this)
  }

  signin(req, res) {
    return new Response(this.service.signin(req.user)).send(res)
  }

  register(req, res, next) {
    this.exec(this.service.createUser(req.body), res, next, 201)
  }

  addAdmin(req, res, next) {
    this.exec(this.service.createAdmin(req.body), res, next, 201)
  }

  getCurrentUser(req, res, next) {
    const data = req.user
    return new Response({ data }).send(res)
  }

  async exec(proces, res, next, code) {
    await proces.then(
      (response) => {
        return new Response(response, code).send(res)
      },
      (err) => {
        next(err.status ? err : new BadRequestError(err.message))
      }
    )
  }
}

export default new AuthController()
