import React from 'react'
import { useDispatch } from 'react-redux'

import { setSelectedArticle } from '../../redux/slices/articlesSlice'
import ArticleRate from '../article-rate/article-rate'

import './article-title.scss'

function ArticleTitle({ title, favoritesCount, authorUsername, article }) {
  const dispatch = useDispatch()

  const handleTitleClick = () => {
    dispatch(setSelectedArticle(article))
  }

  return (
    <div className="title-wrapper">
      <div>
        <a href="#" onClick={handleTitleClick}>
          {title}
        </a>
        <ArticleRate />
        <span>{favoritesCount}</span>
      </div>
      <span>{authorUsername}</span>
    </div>
  )
}

export default ArticleTitle
