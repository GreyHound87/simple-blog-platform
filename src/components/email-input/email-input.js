import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import './email-input.scss'

function EmailInput({ label, name, rules, validateStatus, marginBottom }) {
  return (
    <Form.Item
      label={<span className="email-label">{label}</span>}
      name={name}
      rules={rules}
      validateStatus={validateStatus}
      style={{ marginBottom }}
    >
      <Input className="email-input" placeholder={label} style={{ marginBottom: '3px' }} />
    </Form.Item>
  )
}

EmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validateStatus: PropTypes.string,
  marginBottom: PropTypes.string,
}

EmailInput.defaultProps = {
  validateStatus: '',
  marginBottom: '0',
}

export default EmailInput
