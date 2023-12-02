import React from 'react'
import { Form, Input, Button, Space, Checkbox } from 'antd'
import { Link } from 'react-router-dom'

function Signup() {
  const onFinish = (values) => {
    console.log('Signing up with:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <h2>Create new account</h2>
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
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>

      <Space>
        Already have an account?
        <Link to="/login">Log In</Link>
      </Space>
    </div>
  )
}

export default Signup
