import React, { useState } from 'react'
import { Form, Input, Button, Space, Checkbox, message } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { registerUserAsync } from '../../redux/slices/authSlice'
import api from '../../services/api'

function Signup() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onFinish = async (values) => {
    try {
      setLoading(true)
      const passwordBuffer = Buffer.from(values.password, 'utf-8')
      const requestData = {
        user: {
          email: values.email,
          username: values.username,
          bio: null,
          image: null,
          password: passwordBuffer,
        },
      }
      const requestDataString = JSON.stringify(requestData)

      const response = await api.registerUser(requestDataString)
      dispatch(registerUserAsync(response))
      message.success('Account created successfully')
    } catch (err) {
      setError(err.message || 'Error registering user')
      console.error('Error registering user:', err)
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <h2>Create new account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form name="signupForm" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Username' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email address" name="email" rules={[{ required: true, message: 'Email address' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Repeat Password"
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
