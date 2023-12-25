import React from 'react'
import { Button, Popconfirm, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import api from '../../services/api'
import textCutter from '../../helpers/text-cutter'

import './article-meta.scss'

function ArticleMeta({ description, slug, author }) {
  const history = useHistory()
  const user = useSelector((state) => state.auth.user)

  message.config({
    maxCount: 1,
  })

  const handleDeleteConfirm = async () => {
    const isDeleted = await api.deleteArticle(slug)
    if (isDeleted) {
      message.success('Article deleted successfully')
      history.push('/')
    } else {
      message.error('Failed to delete article')
    }
  }

  const isAuthor = user && user.username === author

  return (
    <div className="meta-container">
      <span className="article-description--meta">{textCutter(description, 400)}</span>
      {isAuthor && (
        <div className="meta-btn-wrapper">
          <Popconfirm
            placement="rightTop"
            title="Are you sure to delete this article?"
            overlayStyle={{ maxWidth: '232px' }}
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

ArticleMeta.propTypes = {
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default ArticleMeta
