import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Avatar } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { Link } from 'react-router-dom'

import { logoutUser } from '../../redux/slices/authSlice'
import ResIcon from '../res-icon/res-icon'
import './header.scss'

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  let extraContent

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    dispatch(logoutUser())
  }

  if (user) {
    extraContent = (
      <>
        <Link to="/new-article">
          <Button className="header_btn--create">
            <span className="btn-txt--sm">Create article</span>
          </Button>
        </Link>
        <Link to="/profile" className="edit-profile-link">
          <span className="username">{user.username}</span>
          <Avatar src={user.image} icon={<ResIcon />} size={46} alt="Author Avatar" />
        </Link>
        <Link to="/">
          <Button size="large" className="header_btn--log-out" onClick={handleLogout}>
            <span className="btn-txt">Log Out</span>
          </Button>
        </Link>
      </>
    )
  } else {
    extraContent = (
      <>
        <Link to="/sign-in">
          <Button type="text" size="large" className="header_btn--sign-in">
            <span className="btn-txt">Sign In</span>
          </Button>
        </Link>
        <Link to="/sign-up">
          <Button type="text" size="large" className="header_btn--sign-up">
            <span className="btn-txt">Sign Up</span>
          </Button>
        </Link>
      </>
    )
  }
  return (
    <PageHeader
      className="site-page-header"
      ghost={false}
      title={
        <Link to="/" className="title-link">
          Realworld Blog
        </Link>
      }
      extra={extraContent}
    />
  )
}

export default Header
