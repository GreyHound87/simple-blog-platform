import React from 'react'
import { Form, Input, Button, Space } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { loginUserAsync } from '../../redux/slices/authSlice'

function Login() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)
  const error = useSelector((state) => state.auth.error)

  const onFinish = async (values) => {
    try {
      const response = await dispatch(loginUserAsync(values))
      console.log('Login successful:', response)
    } catch (err) {
      console.error('Error logging in:', err)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
