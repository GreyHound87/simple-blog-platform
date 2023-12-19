import React from 'react'
import { Form, Input } from 'antd'

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

export default PasswordInput
