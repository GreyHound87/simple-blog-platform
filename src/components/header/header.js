import { Button } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { Link } from 'react-router-dom'
import React from 'react'
import './header.scss'

function Header() {
  return (
    <PageHeader
      className="site-page-header"
      ghost={false}
      title={<Link to="/">Realworld Blog</Link>}
      extra={[
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
      ]}
    />
  )
}

export default Header
