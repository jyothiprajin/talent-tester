import { Router } from 'express'
import TestController from '../../controlers/TestController'
export default () => {
  const route = Router()
  route.get('/', TestController.getAll)
  route.get('/:id', TestController.get)
  route.get('/:id/mcqs', TestController.getMCQS)
  route.get('/:id/answers', TestController.getUserAnswers)
  return route
}
