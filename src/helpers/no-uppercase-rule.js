const noUppercaseRule = {
  validator(_, value) {
    if (value && /[A-Z]/.test(value)) {
      return Promise.reject(new Error('Should not contain uppercase letters'))
    }
    return Promise.resolve()
  },
}

export default noUppercaseRule
