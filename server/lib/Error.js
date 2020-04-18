export class UnauthorizedError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'UnauthorizedError'
    this.status = status || 401
  }
}
export class NotFoundError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'NotFoundError'
    this.status = status || 404
  }
}
export class BadRequestError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'BadRequestError'
    this.status = status || 400
  }
}
