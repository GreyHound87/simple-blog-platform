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
          <Button type="text" className="header_btn--create">
            Create article
          </Button>
        </Link>
        <Link to="/profile">
          <Button type="text" className="header_btn--profile">
            {user.username}
            <Avatar src={user.image} icon={<ResIcon />} size={46} alt="Author Avatar" />
          </Button>
        </Link>
        <Link to="/">
          <Button type="text" className="header_btn--log-out" onClick={handleLogout}>
            Log Out
          </Button>
        </Link>
      </>
    )
  } else {
    extraContent = (
      <>
        <Link to="/sign-in">
          <Button type="text" className="header_btn--sign-in">
            Sign In
          </Button>
        </Link>
        <Link to="/sign-up">
          <Button type="text" className="header_btn--sign-up">
            Sign Up
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
