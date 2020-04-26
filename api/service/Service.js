import apiClient from '../apiClient'
class Service {
  constructor(resource) {
    this.resource = resource
    this.getAll = this.getAll.bind(this)
    this.get = this.get.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.exec = this.exec.bind(this)
  }

  getAll() {
    return this.exec(apiClient.$get(`${this.resource}`))
  }

  get(id) {
    return this.exec(apiClient.$get(`${this.resource}/${id}`))
  }

  create(payload) {
    return this.exec(apiClient.$post(`${this.resource}`, payload))
  }

  update(payload, id) {
    return this.exec(apiClient.$put(`${this.resource}/${id}`, payload))
  }

  delete(id) {
    return this.exec(apiClient.$delete(`${this.resource}/${id}`))
  }

  async exec(process) {
    const response = await process
    return response.data
  }
}
export default Service
