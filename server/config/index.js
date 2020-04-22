import dotenv from 'dotenv'

const envFound = dotenv.config()
if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
  /** show API error stack in response */
  showErrorStack: process.env.ERROR_STACK || false,
  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGODB_URI,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * API configs
   */
  api: {
    prefix: process.env.API_PREFIX || '/api'
  }
}
