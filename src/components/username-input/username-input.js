import React from 'react'
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

export default UsernameInput
