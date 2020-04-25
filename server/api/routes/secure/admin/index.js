import { Router } from 'express'
import users from './users'
import answers from './answers'
import mcqs from './mcqs'
import tests from './tests'
import tenent from './tenent'
export default () => {
  const route = Router()
  route.use('/users', users())
  route.use('/answers', answers())
  route.use('/mcqs', mcqs())
  route.use('/tests', tests())
  route.use('/tenent', tenent())
  return route
}
