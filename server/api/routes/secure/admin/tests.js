import { Router } from 'express'
import TestController from '../../../controlers/TestController'
export default () => {
  const route = Router()

  route.get('/:id/mcqs', TestController.getMCQS)
  route.post('/:id/mcqs', TestController.createMCQ)
  route.post('/:id/results', TestController.publishResults)
  route.get('/:id/results', TestController.getResults)
  route.post('/', TestController.create)
  route.get('/', TestController.getAll)
  route.get('/:id', TestController.get)
  route.put('/:id', TestController.update)
  route.delete('/:id', TestController.delete)

  return route
}
