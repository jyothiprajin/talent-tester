import TenentService from '../services/TenentService'
export const AppendTenentId = async (req, res, next) => {
  const domain = req.get('origin')
  const tenentId = await new TenentService().getByDomain(domain)
  if (!req.body) req.body = {}
  req.body.tenentId = tenentId
  next()
}
export const copyTenentIdToParms = (req, res, next) => {
  req.params.id = req.user.tenentId
  next()
}

export const copyTenentIdToBody = (req, res, next) => {
  req.body.tenentId = req.user.tenentId
  next()
}
