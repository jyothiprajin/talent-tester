import consola from 'consola'
import mongooseLoader from './loaders/mongoose'

async function clear() {
  try {
    const db = await mongooseLoader()
    await db.dropDatabase()
    process.exit(0)
  } catch (e) {
    consola.error(e)
  }
}
clear()
