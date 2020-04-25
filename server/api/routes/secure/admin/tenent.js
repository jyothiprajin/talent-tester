import { Router } from 'express'
import TenentController from '../../../controlers/TenentController'
import { copyTenentIdToParms } from '../../../middlewares/TenentMiddilware'
export default () => {
  const route = Router()
  route.get('/', copyTenentIdToParms, TenentController.get)
  route.put('/', copyTenentIdToParms, TenentController.update)
  route.delete('/', copyTenentIdToParms, TenentController.delete)
  return route
}
