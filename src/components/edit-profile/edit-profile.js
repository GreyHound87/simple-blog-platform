import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { updateUserAsync } from '../../redux/slices/authSlice'

function EditProfile() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.auth.user)
  const loading = useSelector((state) => state.auth.loading)
  const error = useSelector((state) => state.auth.error)

  const onFinish = async (values) => {
    try {
      await dispatch(updateUserAsync(values))
      message.success('Profile updated successfully')
      history.push('/')
    } catch (err) {
      console.error('Error updating profile:', err)
      message.error(err.message || 'Error updating profile')
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  /* const validateAvatar = (rule, value, callback) => {
    if (value && !isValidUrl(value)) {
      callback('Avatar image must be a valid URL')
    } else {
      callback()
    }
  }

  const isValidUrl = (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  } */

  return (
    <div>
      <h2>Edit Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form
        name="editProfileForm"
        initialValues={{ username: user.username, email: user.email }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Username is required' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Email address"
          name="email"
          rules={[
            { required: true, message: 'Email address is required' },
            { type: 'email', message: 'Please enter a valid email address' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="New password"
          name="password"
          rules={[{ min: 6, max: 40, message: 'Password must be 6 to 40 characters' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Avatar image (url)" name="avatar">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditProfile
