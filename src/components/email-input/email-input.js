import React from 'react'
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

export default EmailInput
