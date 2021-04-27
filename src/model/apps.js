// eslint-disable-next-line no-unused-vars
import _axios, { _delete, get, put } from 'lin/plugin/axios'

class Apps {
  async createApps(data) {
    return _axios({
      method: 'post',
      url: '/v1/apps',
      data,
    })
  }

  async getApps() {
    return _axios({
      method: 'get',
      url: '/v1/apps',
      handleError: 'true',
    })
  }

  async deleteAPP(id) {
    const res = _delete(`/v1/apps/${id}`)
    return res
  }

  async getAppById(id) {
    const res = get(`/v1/apps/${id}`)
    return res
  }

  async editAppById(id, data) {
    const res = put(`/v1/apps/${id}`, data)
    return res
  }
}

export default new Apps()
