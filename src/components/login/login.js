import React from 'react'
import { Form, Input, Button, Space, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { loginUserAsync } from '../../redux/slices/authSlice'

function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const loading = useSelector((state) => state.auth.loading)
  const error = useSelector((state) => state.auth.error)

  const onFinish = async (values) => {
    try {
      await dispatch(loginUserAsync(values))
      message.success('Login successful')
      history.push('/')
    } catch (err) {
      console.error('Error logging in:', err)
      message.error('Login failed. Please check your credentials.')
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={(errorInfo) => console.log('Failed:', errorInfo)}
      >
        <Form.Item label="Email address" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>

      <Space>
        Don’t have an account?
        <Link to="/sign-up">Sign Up</Link>
      </Space>
    </div>
  )
}

export default Login
