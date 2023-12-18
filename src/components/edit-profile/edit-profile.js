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

  message.config({
    maxCount: 1,
  })

  const onFinish = async (values) => {
    try {
      await dispatch(updateUserAsync(values))
      history.push('/')
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
        initialValues={user && { username: user.username, email: user.email, image: user.image }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label={<span className="username-label">Username</span>}
          name="username"
          rules={[
            { required: true, message: 'Please enter your username.' },
            { min: 3, max: 20, message: 'Your username needs to be at least 3 to 20 characters.' },
          ]}
          validateStatus={error && error.username ? 'error' : ''}
          style={{
            marginBottom: '3px',
          }}
        >
          <Input
            className="username-input"
            placeholder="Username"
            style={{
              marginBottom: '3px',
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span className="email-label">Email address</span>}
          name="email"
          rules={[
            { required: true, message: 'Please enter your email address.' },
            { type: 'email', message: 'Your email needs to be valid.' },
          ]}
          validateStatus={error && error.email ? 'error' : ''}
          style={{
            marginBottom: '3px',
          }}
        >
          <Input
            className="email-input"
            placeholder="Email address"
            style={{
              marginBottom: '3px',
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span className="password-label">New password</span>}
          name="password"
          rules={[
            { required: true, message: 'Please enter your password.' },
            { min: 6, max: 40, message: 'Your password needs to be at least 6 to 40 characters.' },
          ]}
          validateStatus={error && error.password ? 'error' : ''}
          style={{
            marginBottom: '3px',
          }}
        >
          <Input.Password
            className="password-input"
            placeholder="New password"
            style={{
              marginBottom: '3px',
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span className="avatar-label">Avatar image (url)</span>}
          rules={[{ type: 'url', message: 'Your avatar image needs to be a valid url.' }]}
          validateStatus={error && error.avatar ? 'error' : ''}
          name="image"
          style={{
            marginBottom: '3px',
          }}
        >
          <Input
            className="avatar-input"
            placeholder="Avatar image"
            style={{
              marginBottom: '16px',
            }}
          />
        </Form.Item>

        <Form.Item
          style={{
            marginBottom: '10px',
          }}
        >
          <Button className="profile-form_btn" type="primary" htmlType="submit" loading={loading}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditProfile
