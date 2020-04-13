import consola from 'consola'
import Response from '../../lib/Response'
import { NotFoundError } from '../../lib/Error'
class Service {
  constructor(model) {
    this.model = model
    this.getAll = this.getAll.bind(this)
    this.get = this.get.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll(query) {
    let { skip, limit } = query

    skip = skip ? Number(skip) : 0
    limit = limit ? Number(limit) : 500

    const items = await this.model
      .find()
      .skip(skip)
      .limit(limit)
    const total = await this.model.count()

    return new Response({ items, total })
  }

  async get(id) {
    const item = await this.model.findById(id)
    if (!item) throw new NotFoundError('Item not found')
    return new Response({ item })
  }

  async create(data) {
    const item = await this.model.create(data)
    return new Response({ item }, 201)
  }

  async update(id, data) {
    const item = await this.model.findByIdAndUpdate(id, data, { new: true })
    return new Response({ item }, 202)
  }

  async delete(id) {
    const item = await this.model.findByIdAndDelete(id)
    if (!item) throw new NotFoundError('Item not found')
    consola.info(' remode item ', item)
    return new Response(null, 204)
  }
}

export default Service
