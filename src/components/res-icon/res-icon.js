import React from 'react'

import fallbackImage from '../../assets/avatar.jpg'

function ResIcon() {
  return <img src={fallbackImage} alt="Fallback Icon" style={{ width: '46px', height: '46px', borderRadius: '50%' }} />
}

export default ResIcon
