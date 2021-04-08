import _axios, { get, put, _delete } from '@/lin/plugin/axios'

class Books {
  async createBook(data) {
    return _axios({
      method: 'post',
      url: 'v1/books',
      data,
    })
  }

  async editBook(id, info) {
    const res = await put(`v1/books/${id}`, info)
    return res
  }

  async deleteBook(id) {
    const res = await _delete(`/v1/books/${id}`)
    return res
  }

  async getBook(id) {
    const res = await get(`v1/book/${id}`)
    return res
  }

  async getBooks() {
    return _axios({
      method: 'get',
      url: 'v1/books/getall',
      handleError: true,
    })
  }
}

export default new Books()
