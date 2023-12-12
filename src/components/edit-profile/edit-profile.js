import React, { useEffect } from 'react'
import { Form, Input, Button, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { updateUserAsync, clearError } from '../../redux/slices/authSlice'
import './edit-profile.scss'

function EditProfile() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.auth.user)
  const loading = useSelector((state) => state.auth.loading)
  const error = useSelector((state) => state.auth.error)

  const onFinish = async (values) => {
    try {
      await dispatch(updateUserAsync(values))
    } catch (err) {
      message.error('Error updating profile')
    }
  }

  useEffect(
    () => () => {
      dispatch(clearError())
    },
    [dispatch]
  )

  useEffect(() => {
    if (error) {
      const errorMessages = Object.entries(error).map(([key, value]) => `${key} ${value}`)
      message.error(`Error: ${errorMessages.join(', ')}`)
    }
  }, [user, loading, error, history])

  const onFinishFailed = () => {
    message.error('Failed')
  }

  return (
    <div className="profile-container">
      <h2 className="profile-header">Edit Profile</h2>
      <Form
        name="editProfileForm"
        className="profile-form"
        layout="vertical"
        requiredMark={false}
        initialValues={user && { username: user.username, email: user.email }}
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
            { required: true, message: 'Email address is required' },
            { type: 'email', message: 'Please enter a valid email address' },
          ]}
          validateStatus={error && error.email ? 'error' : ''}
        >
          <Input placeholder="Email address" />
        </Form.Item>

        <Form.Item
          label={<span className="password-label">New password</span>}
          name="password"
          rules={[
            { required: true, message: 'Please enter your password' },
            { min: 6, max: 40, message: 'Password must be 6 to 40 characters' },
          ]}
          validateStatus={error && error.password ? 'error' : ''}
        >
          <Input.Password placeholder="New password" />
        </Form.Item>

        <Form.Item
          label={<span className="avatar-label">Avatar image (url)</span>}
          rules={[{ type: 'url', message: 'This field must be a valid url.' }]}
          validateStatus={error && error.avatar ? 'error' : ''}
          name="image"
        >
          <Input placeholder="Avatar image" />
        </Form.Item>

        <Form.Item>
          <Button className="profile-form_btn" type="primary" htmlType="submit" loading={loading}>
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditProfile
