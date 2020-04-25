import { BadRequestError } from '../../lib/Error'
class Controller {
  constructor(service) {
    this.service = service
    this.getAll = this.getAll.bind(this)
    this.get = this.get.bind(this)
    this.insert = this.insert.bind(this)
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

  insert(req, res, next) {
    this.exec(this.service.insert(req.body), res, next)
  }

  update(req, res, next) {
    const { id } = req.params
    this.exec(this.service.update(id, req.body), res, next)
  }

  delete(req, res, next) {
    const { id } = req.params
    this.exec(this.service.delete(id), res, next)
  }

  async exec(proces, res, next) {
    await proces.then(
      (response) => {
        return response.send(res)
      },
      (err) => {
        next(err.status ? err : new BadRequestError(err.message))
      }
    )
  }
}

export default Controller
