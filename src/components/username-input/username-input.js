import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import './username-input.scss'

function UsernameInput({ label, name, rules, validateStatus, marginBottom }) {
  return (
    <Form.Item
      label={<span className="username-label">{label}</span>}
      name={name}
      rules={rules}
      validateStatus={validateStatus}
      style={{ marginBottom }}
    >
      <Input className="username-input" placeholder={label} style={{ marginBottom: '3px' }} />
    </Form.Item>
  )
}

UsernameInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validateStatus: PropTypes.string,
  marginBottom: PropTypes.string,
}

UsernameInput.defaultProps = {
  validateStatus: '',
  marginBottom: '0',
}

export default UsernameInput
