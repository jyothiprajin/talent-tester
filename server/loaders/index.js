import expressLoader from './express'
import mongooseLoader from './mongoose'
import passportLoader from './passport'
const consola = require('consola')

export default async ({ expressApp }) => {
  await mongooseLoader()
  consola.info('✌️ DB loaded and connected!')

  passportLoader()
  consola.info('✌️ passport loaded !')

  await expressLoader({ app: expressApp })
  consola.info('✌️ Express loaded')
}
