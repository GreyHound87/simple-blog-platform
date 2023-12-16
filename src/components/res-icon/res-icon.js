import React from 'react'

import fallbackImage from '../../assets/avatar.png'

function ResIcon({ width = '46px', height = '46px', borderRadius = '50%' }) {
  return <img src={fallbackImage} alt="Fallback Icon" style={{ width, height, borderRadius }} />
}

export default ResIcon
