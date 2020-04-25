import { BadRequestError } from '../../lib/Error'
import Response from '../../lib/Response'
class Controller {
  constructor(service) {
    this.service = service
    this.getAll = this.getAll.bind(this)
    this.get = this.get.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.exec = this.exec.bind(this)
  }

  getAll(req, res, next) {
    this.exec(this.service.getAll(req.query), res, next)
  }

  get(req, res, next) {
    const { id } = req.params
    this.exec(this.service.get(id), res, next)
  }

  create(req, res, next) {
    this.exec(this.service.create(req.body), res, next, 201)
  }

  update(req, res, next) {
    const { id } = req.params
    this.exec(this.service.update(id, req.body), res, next, 202)
  }

  delete(req, res, next) {
    const { id } = req.params
    this.exec(this.service.delete(id), res, next, 204)
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

export default Controller
