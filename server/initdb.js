import consola from 'consola'
import mongooseLoader from './loaders/mongoose'
import Tenent from './modals/Tenent'
async function init() {
  try {
    await mongooseLoader()
    await Tenent.create({})
  } catch (e) {
    consola.error(e)
  }
  process.exit(0)
}
init()
