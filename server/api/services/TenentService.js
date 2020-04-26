import Tenent from '../../modals/Tenent'
import { NotFoundError } from '../../lib/Error'
import Service from './Service'
class TenentService extends Service {
  constructor() {
    super(Tenent)
  }

  async getByDomain(domain) {
    const data = await this.model.findOne({ domain })
    if (!data) throw new NotFoundError('Tenent not found')
    return data
  }
}

export default TenentService
