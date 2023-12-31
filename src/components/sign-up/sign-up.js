import React, { useEffect } from 'react'
import { Form, Button, Checkbox, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { registerUserAsync, clearError } from '../../redux/slices/authSlice'
import PasswordInput from '../password-input/password-input'
import EmailInput from '../email-input/email-input'
import UsernameInput from '../username-input/username-input'
import noUppercaseRule from '../../helpers/no-uppercase-rule'
import usernamePatternRule from '../../helpers/username-pattern-rule'
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
        <UsernameInput
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Please enter your username.' },
            { min: 3, max: 20, message: 'Your username needs to be at least 3 to 20 characters.' },
            usernamePatternRule,
          ]}
          validateStatus={error && error.username ? 'error' : ''}
          marginBottom="3px"
        />

        <EmailInput
          label="Email address"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email address.' },
            { type: 'email', message: 'Your email needs to be valid.' },
            noUppercaseRule,
          ]}
          validateStatus={error && error.email ? 'error' : ''}
          marginBottom="3px"
        />

        <PasswordInput
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please enter your password.' },
            { min: 6, max: 40, message: 'Your password needs to be at least 6 to 40 characters.' },
          ]}
          validateStatus={error && error.password ? 'error' : ''}
          marginBottom="3px"
        />

        <PasswordInput
          label="Repeat Password"
          name="repeatPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please repeat your password.' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Passwords must match.'))
              },
            }),
          ]}
          validateStatus={error && error.password ? 'error' : ''}
          marginBottom="20px"
        />

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            () => ({
              validator(_, value) {
                if (value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('You need to agree to the processing of your personal information.'))
              },
            }),
          ]}
          style={{
            marginBottom: '25px',
          }}
        >
          <Checkbox>
            <span className="checkbox-txt">I agree to the processing of my personal information</span>
          </Checkbox>
        </Form.Item>

        <Form.Item
          style={{
            marginBottom: '10px',
          }}
        >
          <Button className="reg-form_btn" type="primary" htmlType="submit" loading={loading}>
            Create
          </Button>
        </Form.Item>
      </Form>
      <span className="reg-form_txt">
        {'Already have an account? '}
        <Link to="/sign-in" className="reg-form_link">
          Sing In
        </Link>
      </span>
    </div>
  )
}

export default Signup
