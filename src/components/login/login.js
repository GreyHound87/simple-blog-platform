import React, { useEffect } from 'react'
import { Form, Input, Button, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { loginUserAsync, clearError } from '../../redux/slices/authSlice'
import './login.scss'

function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const loading = useSelector((state) => state.auth.loading)
  const error = useSelector((state) => state.auth.error)
  const user = useSelector((state) => state.auth.user)

  const onFinish = async (values) => {
    try {
      await dispatch(loginUserAsync(values))
    } catch (err) {
      message.error('Error logging in')
    }
  }

  useEffect(
    () => () => {
      dispatch(clearError())
    },
    [dispatch]
  )

  useEffect(() => {
    if (user && !loading && !error) {
      message.success('Login successful')
      history.push('/')
    } else if (error) {
      const errorMessages = Object.entries(error).map(([key, value]) => `${key} ${value}`)
      message.error(`Error: ${errorMessages.join(', ')}`)
    }
  }, [user, loading, error, history])

  return (
    <div className="login-container">
      <h2 className="login-header">Sign In</h2>
      <Form
        name="loginForm"
        className="login-form"
        layout="vertical"
        requiredMark={false}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={() => message.error('Failed')}
      >
        <Form.Item
          label={<span className="email-label">Email address</span>}
          name="email"
          rules={[{ required: true, message: 'Please enter your email' }]}
          validateStatus={error ? 'error' : ''}
        >
          <Input placeholder="Email address" />
        </Form.Item>

        <Form.Item
          label={<span className="password-label">Password</span>}
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
          validateStatus={error ? 'error' : ''}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button className="login-form_btn" type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
      <span className="login-form_txt">
        Don’t have an account?
        <Link className="login-form_link" to="/sign-up">
          Sign Up
        </Link>
      </span>
    </div>
  )
}

export default Login
