const generateHeaders = () => {
  const token = localStorage.getItem('authToken')
  return {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: token ? `Token ${token}` : '',
  }
}

export default generateHeaders
