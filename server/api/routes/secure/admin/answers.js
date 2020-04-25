import { Router } from 'express'
import AnswerController from '../../../controlers/AnswerController'
export default () => {
  const route = Router()
  route.get('/', AnswerController.getAll)
  route.get('/:id', AnswerController.get)
  return route
}
