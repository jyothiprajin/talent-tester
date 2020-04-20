import apiClient from '../apiClient'
class Service {
  constructor(resource) {
    this.resource = resource
    this.getAll = this.getAll.bind(this)
    this.get = this.get.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  getAll() {
    return apiClient.$get(`/${this.resource}`)
  }

  get(id) {
    return apiClient.$get(`/${this.resource}/${id}`)
  }

  create(payload) {
    return apiClient.$post(`/${this.resource}`, payload)
  }

  update(payload, id) {
    return apiClient.$put(`/${this.resource}/${id}`, payload)
  }

  delete(id) {
    return apiClient.$delete(`/${this.resource}/${id}`)
  }
}
export default Service
