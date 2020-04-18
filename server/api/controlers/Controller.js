class Controller {
  constructor(service) {
    this.service = service
    this.getAll = this.getAll.bind(this)
    this.get = this.get.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll(req, res) {
    const response = await this.service.getAll(req.query)
    return response.send(res)
  }

  async get(req, res) {
    const response = await this.service.get(req.params)
    return response.send(res)
  }

  async insert(req, res) {
    const response = await this.service.insert(req.body)
    return response.send(res)
  }

  async update(req, res) {
    const { id } = req.params
    const response = await this.service.update(id, req.body)
    return response.send(res)
  }

  async delete(req, res) {
    const { id } = req.params
    const response = await this.service.delete(id)
    return response.send(res)
  }
}

export default Controller
