import React from 'react'
import { message } from 'antd'
import { useSelector } from 'react-redux'

import ArticleForm from '../article-form/article-form'
import api from '../../services/api'

function EditArticle() {
  const initialValues = useSelector((state) => state.articles.selectedArticle)

  const handleSubmit = async (articleData) => {
    console.log(initialValues.slug)
    try {
      const response = await api.updateArticle(initialValues.slug, articleData)

      if (response.errors) {
        message.error('Failed to edit article')
      } else {
        message.success('Article edited successfully')
      }
    } catch (error) {
      console.error('Error editing article:', error)
      message.error('Failed to edit article')
    }
  }

  return (
    <div>
      <h2>Edit article</h2>
      <ArticleForm onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  )
}

export default EditArticle
