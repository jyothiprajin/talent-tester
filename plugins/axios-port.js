import { setClient } from '~/api/apiClient'

export default ({ app }) => {
  setClient(app.$axios)
}
