import _axios from 'lin/plugin/axios'

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
}

export default new Apps()
