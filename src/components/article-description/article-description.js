import React from 'react'
import { Tag } from 'antd'

import uniqueTags from '../../helpers/unique-tags'

import './article-description.scss'

function ArticleDescription({ tagList, createdAt }) {
  return (
    <div className="description-wrapper">
      <div className="tags-container">
        {uniqueTags(tagList).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <span>{createdAt}</span>
    </div>
  )
}

export default ArticleDescription
