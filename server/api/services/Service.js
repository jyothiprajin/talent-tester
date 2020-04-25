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

  async getAll(query, select = '') {
    let { number, size } = query

    number = number ? Number(number) : 0
    size = size ? Number(size) : 500

    const results = await this.model
      .find()
      .select(select)
      .skip(number)
      .limit(size)
    const total = await this.model.countDocuments()
    return new Response({ results, number, size, total })
  }

  async get(id) {
    const data = await this.model.findById(id)
    if (!data) throw new NotFoundError('Item not found')
    return new Response({ data })
  }

  async create(input) {
    const data = await this.model.create(input)
    return new Response({ data }, 201)
  }

  async update(id, input) {
    const data = await this.model.findByIdAndUpdate(id, input, { new: true })
    if (!data) throw new NotFoundError('Item not found')
    return new Response({ data }, 202)
  }

  async delete(id) {
    const data = await this.model.findByIdAndDelete(id)
    if (!data) throw new NotFoundError('Item not found')
    consola.info(' remode item ', data)
    return new Response(null, 204)
  }

  async populateRelated(id, name) {
    const data = await this.model.findById(id).populate(name)
    if (!data) throw new NotFoundError('Item not found')
    return new Response({ results: data[name] })
  }
}

export default Service
