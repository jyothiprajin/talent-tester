import mongoose from 'mongoose'
import consola from 'consola'
import config from '../config'
export default async () => {
  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  const db = connection.connection.db
  db.on('error', consola.error(' 🔥  connection error...'))
  db.on('connected', () => {
    consola.success(` ✌️  Database opened`)
  })
  db.on('disconnected', () => {
    consola.warn('🛑 Database is disconnected')
  })
  return db
}
