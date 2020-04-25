import TenentService from '../services/TenentService'
export const AppendTenentId = async (req, res, next) => {
  const domain = req.get('origin')
  const tenentId = await new TenentService().getByDomain(domain)
  if (!req.body) req.body = {}
  req.body.tenentId = tenentId
  next()
}
