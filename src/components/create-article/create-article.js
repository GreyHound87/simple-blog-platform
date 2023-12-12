import React from 'react'
import { message } from 'antd'

import ArticleForm from '../article-form/article-form'
import api from '../../services/api'

function CreateArticle() {
  const handleSubmit = async (articleData) => {
    try {
      const response = await api.createArticle(articleData)

      if (response.errors) {
        message.error('Failed to create article')
      } else {
        message.success('Article created successfully')
      }
    } catch (error) {
      message.error('Failed to create article')
    }
  }

  return (
    <div>
      <h2>Create new article</h2>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateArticle
