import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import './password-input.scss'

function PasswordInput({ label, name, rules, validateStatus, placeholder, marginBottom }) {
  return (
    <Form.Item
      label={<span className="password-label">{label}</span>}
      name={name}
      rules={rules}
      validateStatus={validateStatus}
      style={{ marginBottom }}
    >
      <Input.Password
        className="password-input"
        placeholder={placeholder || 'Password'}
        style={{ marginBottom: '3px' }}
      />
    </Form.Item>
  )
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validateStatus: PropTypes.string,
  placeholder: PropTypes.string,
  marginBottom: PropTypes.string,
}

PasswordInput.defaultProps = {
  validateStatus: '',
  placeholder: 'placeholder',
  marginBottom: '0',
}

export default PasswordInput
