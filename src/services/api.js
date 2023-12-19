import generateHeaders from '../helpers/generate-headers'
import handleResponse from '../helpers/handle-response'

const API_BASE_URL = 'https://blog.kata.academy/api'
const api = {
  fetchData: async (offset, limit) => {
    const url = `${API_BASE_URL}/articles`
    const params = new URLSearchParams({
      offset,
      limit,
    })
    const requestOptions = {
      method: 'GET',
      headers: generateHeaders(),
    }
    const response = await fetch(`${url}?${params}`, requestOptions)
    return handleResponse(response)
  },

  getArticle: async (slug) => {
    const url = `${API_BASE_URL}/articles/${slug}`
    const requestOptions = {
      method: 'GET',
      headers: generateHeaders(),
    }
    const response = await fetch(url, requestOptions)
    const data = await handleResponse(response)
    return data.article
  },

  registerUser: async (userData) => {
    const url = `${API_BASE_URL}/users`
    const response = await fetch(url, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify({ user: userData }),
    })
    const data = await response.json() //  handleResponse не применяю для корректного вывода сообщений пользователю
    if (data.user) {
      localStorage.setItem('authToken', data.user.token)
    }
    return data
  },

  loginUser: async (credentials) => {
    const url = `${API_BASE_URL}/users/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify({ user: credentials }),
    })
    const data = await response.json() //  handleResponse не применяю для корректного вывода сообщений пользователю
    if (data.user) {
      localStorage.setItem('authToken', data.user.token)
    }
    return data
  },

  reLoginUser: async () => {
    const url = `${API_BASE_URL}/user`
    const response = await fetch(url, {
      method: 'GET',
      headers: generateHeaders(),
    })
    const data = await handleResponse(response)
    return data.user
  },

  updateUser: async (userDetails) => {
    const url = `${API_BASE_URL}/user`
    const response = await fetch(url, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify({ user: userDetails }),
    })
    const data = await response.json() //  handleResponse не применяю для корректного вывода сообщений пользователю
    return data
  },

  createArticle: async (articleData) => {
    const url = `${API_BASE_URL}/articles`
    const response = await fetch(url, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify({ article: articleData }),
    })
    return handleResponse(response)
  },

  updateArticle: async (slug, articleData) => {
    const url = `${API_BASE_URL}/articles/${slug}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify({ article: articleData }),
    })
    return handleResponse(response)
  },

  deleteArticle: async (slug) => {
    const url = `${API_BASE_URL}/articles/${slug}`
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: generateHeaders(),
      })
      if (!response.ok) {
        throw new Error(`Failed to delete article: ${response.statusText}`)
      }
      return true
    } catch (error) {
      return false
    }
  },

  favoriteArticle: async (slug, favorited) => {
    const url = `${API_BASE_URL}/articles/${slug}/favorite`
    const requestOptions = {
      method: favorited ? 'DELETE' : 'POST',
      headers: generateHeaders(),
    }
    const response = await fetch(url, requestOptions)
    return handleResponse(response)
  },
}

export default api
