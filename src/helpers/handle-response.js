const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.errors?.body?.[0] || 'Unexpected error')
  }
  return response.json()
}

export default handleResponse
