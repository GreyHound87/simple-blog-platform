import React from 'react'

import ArticleRate from '../article-rate/article-rate'

import './article-title.scss'

function ArticleTitle({ title, favoritesCount, authorUsername }) {
  return (
    <div className="title-wrapper">
      <div>
        <a href="#">{title}</a>
        <ArticleRate />
        <span>{favoritesCount}</span>
      </div>
      <span>{authorUsername}</span>
    </div>
  )
}

export default ArticleTitle
