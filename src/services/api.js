const API_BASE_URL = 'https://blog.kata.academy/api'

const api = {
  fetchData: async (offset, limit) => {
    const url = `${API_BASE_URL}/articles`
    const token = localStorage.getItem('authToken')
    const params = new URLSearchParams({
      offset,
      limit,
    })

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token ? `Token ${token}` : '',
      },
    }

    const response = await fetch(`${url}?${params}`, requestOptions)
    const data = await response.json()
    return data
  },
  getArticle: async (slug) => {
    const url = `${API_BASE_URL}/articles/${slug}`
    const token = localStorage.getItem('authToken')

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token ? `Token ${token}` : '',
      },
    }

    const response = await fetch(url, requestOptions)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.errors.body[0] || 'Unexpected error')
    }

    const data = await response.json()
    return data.article
  },
  registerUser: async (userData) => {
    const url = `${API_BASE_URL}/users`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ user: userData }),
    })
    const data = await response.json()
    console.log(data)
    localStorage.setItem('authToken', data.user.token)
    return data
  },
  loginUser: async (credentials) => {
    const url = `${API_BASE_URL}/users/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ user: credentials }),
    })
    const data = await response.json()
    console.log(data)
    localStorage.setItem('authToken', data.user.token)
    return data
  },
  reLoginUser: async () => {
    const url = `${API_BASE_URL}/user`
    const token = localStorage.getItem('authToken')

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.errors.body[0] || 'Unexpected error')
    }

    const data = await response.json()
    console.log(data)
    return data.user
  },
  updateUser: async (userDetails) => {
    const url = `${API_BASE_URL}/user`
    const token = localStorage.getItem('authToken')

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ user: userDetails }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.errors.message || 'Failed to update user')
      }

      const data = await response.json()
      return data
    } catch (error) {
      throw new Error(error.message || 'Failed to update user')
    }
  },
  createArticle: async (articleData) => {
    const url = `${API_BASE_URL}/articles`
    const token = localStorage.getItem('authToken')

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ article: articleData }),
    })
    const data = await response.json()
    return data
  },
  updateArticle: async (slug, articleData) => {
    const url = `${API_BASE_URL}/articles/${slug}`
    const token = localStorage.getItem('authToken')
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ article: articleData }),
    })
    const data = await response.json()
    return data
  },
  deleteArticle: async (slug) => {
    const url = `${API_BASE_URL}/articles/${slug}`
    const token = localStorage.getItem('authToken')
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
    })
    const data = await response.json()
    return data
  },
  favoriteArticle: async (slug, favorited) => {
    console.log('slug', slug)
    console.log('favorited', favorited)
    const url = `${API_BASE_URL}/articles/${slug}/favorite`
    const token = localStorage.getItem('authToken')
    const requestOptions = {
      method: favorited ? 'DELETE' : 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
    }
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    return data
  },
}

export default api
