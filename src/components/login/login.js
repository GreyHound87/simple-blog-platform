import React from 'react'
import { Form, Input, Button, Space } from 'antd'
import { Link } from 'react-router-dom'

function Login() {
  const onFinish = (values) => {
    console.log('Logging in with:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <h2>Sign In</h2>
      <Form name="loginForm" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Email address" name="email" rules={[{ required: true, message: 'Email address' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>

      <Space>
        Don’t have an account?
        <Link to="/signup">Sign Up</Link>
      </Space>
    </div>
  )
}

export default Login
