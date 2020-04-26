import { Router } from 'express'
import MCQController from '../../controlers/MCQController'
export default () => {
  const route = Router()
  route.post('/:id/answer', MCQController.addAnswer)
  return route
}
