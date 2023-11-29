const fetchDataFromAPI = async (offset, limit) => {
  const url = 'https://blog.kata.academy/api/articles'
  const params = new URLSearchParams({
    offset,
    limit,
  })
  const response = await fetch(`${url}?${params}`)
  const data = await response.json()
  return data
}

export default fetchDataFromAPI
