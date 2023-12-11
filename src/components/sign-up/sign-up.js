import React, { useEffect } from 'react'
import { Form, Input, Button, Space, Checkbox, message } from 'antd'
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
          rules={[{ required: true, message: 'Username' }]}
          validateStatus={error && error.username ? 'error' : ''}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<span className="email-label">Email address</span>}
          name="email"
          rules={[{ required: true, message: 'Email address' }]}
          validateStatus={error && error.email ? 'error' : ''}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<span className="password-label">Password</span>}
          name="password"
          rules={[{ required: true, message: 'Password' }]}
          validateStatus={error && error.password ? 'error' : ''}
        >
          <Input.Password />
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
          <Input.Password />
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
          <Button type="primary" htmlType="submit" loading={loading}>
            Create
          </Button>
        </Form.Item>
      </Form>

      <Space>
        Already have an account?
        <Link to="/sign-in">Log In</Link>
      </Space>
    </div>
  )
}

export default Signup
