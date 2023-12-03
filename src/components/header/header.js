import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Avatar } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { Link } from 'react-router-dom'

import ResIcon from '../res-icon/res-icon'
import './header.scss'

function Header() {
  const user = useSelector((state) => state.auth.user)
  let extraContent

  if (user) {
    console.log(user)
    extraContent = (
      <>
        <Link to="/new-article" key="create">
          <Button type="text" className="header_btn--create">
            Create article
          </Button>
        </Link>
        <Link to="/profile" key="profile">
          <Button type="text" className="header_btn--profile">
            {user.user.username}
            <Avatar src={user.user.image} icon={<ResIcon />} size={46} alt="Author Avatar" />
          </Button>
        </Link>
        <Link to="/" key="out">
          <Button type="text" className="header_btn--log-out">
            Log Out
          </Button>
        </Link>
      </>
    )
  } else {
    extraContent = (
      <>
        <Link to="/sign-in" key="in">
          <Button type="text" className="header_btn--sign-in">
            Sign In
          </Button>
        </Link>
        <Link to="/sign-up" key="up">
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
      title={<Link to="/">Realworld Blog</Link>}
      extra={extraContent}
    />
  )
}

export default Header
