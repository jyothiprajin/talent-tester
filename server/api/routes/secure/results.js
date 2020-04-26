import { Router } from 'express'
import ResultController from '../../controlers/ResultController'
export default () => {
  const route = Router()
  route.get('/', ResultController.getAll)
  return route
}
