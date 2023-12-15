import React from 'react'
import { message } from 'antd'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

import ArticleForm from '../article-form/article-form'
import api from '../../services/api'
import './edit-article.scss'

function EditArticle() {
  const history = useHistory()
  const user = useSelector((state) => state.auth.user)
  const initialValues = useSelector((state) => state.articles.selectedArticle)
  const isAuthor = user && user.username === initialValues.author.username

  message.config({
    maxCount: 1,
  })

  const handleSubmit = async (articleData) => {
    try {
      const { slug } = initialValues
      const response = await api.updateArticle(slug, articleData)

      if (response.errors) {
        message.error('Failed to edit article')
      } else {
        message.success('Article edited successfully')
        history.push('/')
      }
    } catch (error) {
      message.error('Failed to edit article')
    }
  }

  if (!user) {
    return <Redirect to="/sign-in" />
  }
  if (!isAuthor) {
    const { slug } = initialValues
    return <Redirect to={`/articles/:${slug}`} />
  }

  return (
    <div className="article-container">
      <h2 className="form-header">Edit article</h2>
      <ArticleForm onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  )
}

export default EditArticle
