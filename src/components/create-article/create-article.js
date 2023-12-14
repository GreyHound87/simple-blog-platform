import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { message } from 'antd'

import ArticleForm from '../article-form/article-form'
import api from '../../services/api'
import './create-article.scss'

function CreateArticle() {
  const history = useHistory()
  const user = useSelector((state) => state.auth.user)

  message.config({
    maxCount: 1,
  })

  const handleSubmit = async (articleData) => {
    try {
      const response = await api.createArticle(articleData)

      if (response.errors) {
        message.error('Failed to create article')
      } else {
        message.success('Article created successfully')
        history.push('/')
      }
    } catch (error) {
      message.error('Failed to create article')
    }
  }

  if (!user) {
    return <Redirect to="/sign-in" />
  }

  return (
    <div className="article-container">
      <h2 className="form-header">Create new article</h2>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateArticle
