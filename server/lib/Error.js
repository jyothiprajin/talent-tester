import config from '../config'
export class ServerError extends Error {
  constructor(message) {
    super(message)
    this.name = this.name === 'Error' ? 'InternalServerError' : this.name
    this.status = this.status || 500
  }

  toJSON() {
    const json = {}
    Object.getOwnPropertyNames(this).forEach(function(key) {
      if (key !== 'stack' || config.showErrorStack) json[key] = this[key]
    }, this)
    return json
  }
}
export class UnauthorizedError extends ServerError {
  constructor(message, status) {
    super(message)
    this.name = 'UnauthorizedError'
    this.status = status || 401
  }
}
export class NotFoundError extends ServerError {
  constructor(message, status) {
    super(message)
    this.name = 'NotFoundError'
    this.status = status || 404
  }
}
export class BadRequestError extends ServerError {
  constructor(message, status) {
    super(message)
    this.name = 'BadRequestError'
    this.status = status || 400
  }
}
