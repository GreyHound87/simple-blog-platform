import { Button } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import React from 'react'
import './header.scss'

function Header() {
  return (
    <PageHeader
      className="site-page-header"
      ghost={false}
      title="Realworld Blog"
      extra={[
        <Button key="in" type="text" className="header_btn--sign-in">
          Sign In
        </Button>,
        <Button key="up" type="text" className="header_btn--sign-up">
          Sign Up
        </Button>,
      ]}
    />
  )
}

export default Header
