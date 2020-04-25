import consola from 'consola'
import mongooseLoader from './loaders/mongoose'
import Tenent from './modals/Tenent'
import Subscription from './modals/Subscribtion'
async function init() {
  try {
    await mongooseLoader()
    await Subscription.create({})
    await Tenent.create({})
  } catch (e) {
    consola.error(e)
  }
  process.exit(0)
}
init()
