import React from 'react'
import { Button, Popconfirm, message } from 'antd'
import { Link } from 'react-router-dom'

import api from '../../services/api'

function ArticleMeta({ description, slug }) {
  const handleDeleteConfirm = async () => {
    try {
      const response = await api.deleteArticle(slug)

      if (response.errors) {
        message.error('Failed to delete article')
      } else {
        message.success('Article deleted successfully')
      }
    } catch (error) {
      console.error('Error deleting article:', error)
      message.error('Failed to delete article')
    }
  }

  return (
    <div>
      {description}
      <Popconfirm
        title="Are you sure you want to delete this article?"
        onConfirm={handleDeleteConfirm}
        okText="Yes"
        cancelText="No"
      >
        <Button type="text" className="article_btn--del">
          Delete
        </Button>
      </Popconfirm>

      <Link to={`/articles/${slug}/edit`}>
        <Button type="text" className="article_btn--edit">
          Edit
        </Button>
      </Link>
    </div>
  )
}

export default ArticleMeta
