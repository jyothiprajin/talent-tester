import TenentService from '../services/TenentService'
export const AppendTenentId = async (req, res, next) => {
  const domain = req.get('origin')
  const tenent = await new TenentService().getByDomain(domain)
  if (!req.body) req.body = {}
  req.body.tenent = tenent
  next()
}
export const copyTenentIdToParms = (req, res, next) => {
  req.params.id = req.user.tenent
  next()
}

export const copyTenentIdToBody = (req, res, next) => {
  req.body.tenent = req.user.tenent
  next()
}
