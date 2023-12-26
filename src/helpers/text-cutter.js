function textCutter(text = '', maxLength = 0) {
  if (typeof text !== 'string' || typeof maxLength !== 'number' || maxLength <= 0) {
    return text
  }

  if (text.length <= maxLength) {
    return text
  }

  const trimmedText = text.substring(0, maxLength)
  const lastSpaceIndex = trimmedText.lastIndexOf(' ')

  if (lastSpaceIndex !== -1) {
    return `${trimmedText.substring(0, lastSpaceIndex)}...`
  }

  return `${trimmedText}...`
}

export default textCutter
