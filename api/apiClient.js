let client

export function setClient(newclient) {
  client = newclient
}
// Request helpers
const reqMethods = [
  'request',
  'delete',
  'get',
  'head',
  'options', // url, config
  'post',
  'put',
  'patch' // url, data, config
]

const apiClient = {}

reqMethods.forEach((method) => {
  apiClient[`$${method}`] = function() {
    if (!client) throw new Error('apiClient not installed')
    return client[method].apply(null, arguments)
  }
})
export default apiClient
