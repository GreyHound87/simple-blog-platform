function textCutter(text = '', maxLength = 0) {
  if (text.length <= maxLength) {
    return text
  }
  const truncatedText = text.substring(0, maxLength)
  const lastSpaceIndex = truncatedText.lastIndexOf(' ')
  if (lastSpaceIndex !== -1) {
    return `${truncatedText.substring(0, lastSpaceIndex)}...`
  }
  return `${truncatedText}...`
}

export default textCutter
