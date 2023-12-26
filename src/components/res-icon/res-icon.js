import React from 'react'
import PropTypes from 'prop-types'

import fallbackImage from '../../assets/avatar.png'

function ResIcon({ width, height, borderRadius }) {
  return <img src={fallbackImage} alt="Fallback Icon" style={{ width, height, borderRadius }} />
}

ResIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
}

ResIcon.defaultProps = {
  width: '46px',
  height: '46px',
  borderRadius: '50%',
}

export default ResIcon
