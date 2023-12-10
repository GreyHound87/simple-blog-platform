import React from 'react'
import { Button, Popconfirm, message } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import api from '../../services/api'

import './article-meta.scss'

function ArticleMeta({ description, slug, author }) {
  const user = useSelector((state) => state.auth.user)

  const handleDeleteConfirm = async () => {
    try {
      const response = await api.deleteArticle(slug)

      if (response.errors) {
        message.error('Failed to delete article')
      } else {
        message.success('Article deleted successfully')
      }
    } catch (error) {
      message.error('Error deleting article:', error)
    }
  }

  const isAuthor = user && user.username === author

  return (
    <div className="meta-container">
      <span className="article-description--meta">{description}</span>
      {isAuthor && (
        <div className="meta-btn-wrapper">
          <Popconfirm
            title="Are you sure you want to delete this article?"
            onConfirm={handleDeleteConfirm}
            okText="Yes"
            cancelText="No"
          >
            <Button danger className="article_btn--del">
              Delete
            </Button>
          </Popconfirm>
          <Link to={`/articles/${slug}/edit`}>
            <Button className="article_btn--edit">Edit</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default ArticleMeta
