import consola from 'consola'

import { NotFoundError } from '../../lib/Error'
class Service {
  constructor(model) {
    this.model = model
    this.getAll = this.getAll.bind(this)
    this.get = this.get.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.createOrUpdate = this.createOrUpdate.bind(this)
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
    return { results, number, size, total }
  }

  async get(id) {
    const data = await this.model.findById(id)
    if (!data) throw new NotFoundError('Item not found')
    return { data }
  }

  async create(input) {
    const data = await this.model.create(input)
    return { data }
  }

  async update(id, input) {
    const data = await this.model.findByIdAndUpdate(id, input, { new: true })
    if (!data) throw new NotFoundError('Item not found')
    return { data }
  }

  async delete(id) {
    const data = await this.model.findByIdAndDelete(id)
    if (!data) throw new NotFoundError('Item not found')
    consola.info(' remode item ', data)
    return null
  }

  async populateRelated(id, path, select = '', match = null) {
    const data = await this.model.findById(id).populate({ path, select, match })
    if (!data) throw new NotFoundError('Item not found')
    return { results: data[path] }
  }

  async createOrUpdate(find, input) {
    const data = await this.model.findOneAndUpdate(find, input, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true
    })
    return { data }
  }
}

export default Service
