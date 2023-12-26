import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

import uniqueTags from '../../helpers/unique-tags'
import formatDate from '../../helpers/format-date'

import './article-description.scss'

function ArticleDescription({ tagList, createdAt, inCard }) {
  return (
    <div className={`description-wrapper ${inCard ? 'description-wrapper--in-card' : ''}`}>
      <div className={`tags-container ${inCard ? 'tags-container--in-card' : ''}`}>
        {uniqueTags(tagList).map((tag) => (
          <Tag className={`tag ${inCard ? 'tag--in-card' : ''}`} key={tag}>
            {tag}
          </Tag>
        ))}
      </div>
      <span className={`created-date ${inCard ? 'created-date--in-card' : ''}`}>{formatDate(createdAt)}</span>
    </div>
  )
}

ArticleDescription.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  inCard: PropTypes.bool,
}

ArticleDescription.defaultProps = {
  inCard: false,
}

export default ArticleDescription
