import React from 'react'
import { message } from 'antd'
import { useSelector } from 'react-redux'

import ArticleForm from '../article-form/article-form'
import api from '../../services/api'

function EditArticle() {
  const initialValues = useSelector((state) => state.articles.selectedArticle)

  message.config({
    maxCount: 1,
  })

  const handleSubmit = async (articleData) => {
    try {
      const response = await api.updateArticle(initialValues.slug, articleData)

      if (response.errors) {
        message.error('Failed to edit article')
      } else {
        message.success('Article edited successfully')
      }
    } catch (error) {
      message.error('Failed to edit article')
    }
  }

  return (
    <div className="article-container">
      <h2 className="form-header">Edit article</h2>
      <ArticleForm onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  )
}

export default EditArticle
