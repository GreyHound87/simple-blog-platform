import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { Link } from 'react-router-dom'
import './header.scss'

function Header() {
  const user = useSelector((state) => state.auth.user)
  return (
    <PageHeader
      className="site-page-header"
      ghost={false}
      title={<Link to="/">Realworld Blog</Link>}
      extra={
        user
          ? [
              <Link to="/new-article" key="create">
                <Button type="text" className="header_btn--create">
                  Create article
                </Button>
              </Link>,
              <Link to="/profile" key="profile">
              <Button type="text" className="header_btn--profile">
                {user.username}
              </Button>
              </Link>,
              <Link to="/" key="out">
                <Button type="text" className="header_btn--log-out">
                  Log Out
                </Button>
              </Link>,
            ]
          : [
              <Link to="/sign-in" key="in">
                <Button type="text" className="header_btn--sign-in">
                  Sign In
                </Button>
              </Link>,
              <Link to="/sign-up" key="up">
                <Button type="text" className="header_btn--sign-up">
                  Sign Up
                </Button>
              </Link>,
            ]
      }
    />
  )
}

export default Header
