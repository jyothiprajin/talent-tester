export default class Response {
  constructor(data, status) {
    this.data = data
    this.status = status || 200
    this.send = this.send.bind(this)
  }

  send(res) {
    return res.status(this.status).json(this.data)
  }
}
