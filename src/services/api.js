const API_BASE_URL = 'https://blog.kata.academy/api'

const api = {
  fetchData: async (offset, limit) => {
    const url = `${API_BASE_URL}/articles`
    const params = new URLSearchParams({
      offset,
      limit,
    })
    const response = await fetch(`${url}?${params}`)
    const data = await response.json()
    return data
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
}

export default api
