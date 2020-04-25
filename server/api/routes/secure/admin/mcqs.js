import { Router } from 'express'
import MCQController from '../../../controlers/MCQController'
export default () => {
  const route = Router()
  route.post('/', MCQController.create)
  route.get('/', MCQController.getAll)
  route.get('/:id', MCQController.get)
  route.put('/:id', MCQController.update)
  route.delete('/:id', MCQController.delete)
  return route
}
