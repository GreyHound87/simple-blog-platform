import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox, message, Space } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { registerUserAsync, clearError } from '../../redux/slices/authSlice'
import './sign-up.scss'

function Signup() {
  const dispatch = useDispatch()
  const history = useHistory()
  const loading = useSelector((state) => state.auth.loading)
  const error = useSelector((state) => state.auth.error)
  const user = useSelector((state) => state.auth.user)

  message.config({
    maxCount: 1,
  })

  const onFinish = async (values) => {
    try {
      await dispatch(registerUserAsync(values))
    } catch (err) {
      message.error('Registration failed.')
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
      message.success('Registration successful')
      history.push('/')
    } else if (error) {
      const errorMessages = Object.entries(error).map(([key, value]) => `${key} ${value}`)
      message.error(`Error: ${errorMessages.join(', ')}`)
    }
  }, [user, loading, error, history])

  const onFinishFailed = () => {
    message.error('Failed')
  }

  return (
    <div className="reg-container">
      <h2 className="reg-header">Create new account</h2>
      <Form
        name="signupForm"
        className="reg-form"
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label={<span className="username-label">Username</span>}
          name="username"
          rules={[
            { required: true, message: 'Username is required' },
            { min: 3, max: 20, message: 'Username must be 3 to 20 characters' },
          ]}
          validateStatus={error && error.username ? 'error' : ''}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          label={<span className="email-label">Email address</span>}
          name="email"
          rules={[
            { required: true, message: 'Email address' },
            { type: 'email', message: 'Please enter a valid email address' },
          ]}
          validateStatus={error && error.email ? 'error' : ''}
        >
          <Input placeholder="Email address" />
        </Form.Item>

        <Form.Item
          label={<span className="password-label">Password</span>}
          name="password"
          rules={[
            { required: true, message: 'Please enter your password' },
            { min: 6, max: 40, message: 'Password must be 6 to 40 characters' },
          ]}
          validateStatus={error && error.password ? 'error' : ''}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          label={<span className="password-label">Repeat Password</span>}
          name="repeatPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Repeat Password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Passwords do not match'))
              },
            }),
          ]}
          validateStatus={error && error.password ? 'error' : ''}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            () => ({
              validator(_, value) {
                if (value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Agree to the processing of your personal information'))
              },
            }),
          ]}
        >
          <Checkbox>I agree to the processing of my personal information</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button className="reg-form_btn" type="primary" htmlType="submit" loading={loading}>
            Create
          </Button>
        </Form.Item>
      </Form>
      <span className="reg-form_txt">
        {'Already have an account? '}
        <Link to="/sign-in" className="reg-form_link">
          Log In
        </Link>
      </span>
    </div>
  )
}

export default Signup
