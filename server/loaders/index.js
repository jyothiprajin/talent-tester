import expressLoader from './express'
import mongooseLoader from './mongoose'
import passportLoader from './passport'
const consola = require('consola')

export default async ({ expressApp }) => {
  await mongooseLoader()
  consola.success('✌️ DB loaded and connected!')

  passportLoader()
  consola.success('✌️ passport loaded !')

  await expressLoader({ app: expressApp })
  consola.success('✌️ Express loaded')
}
