import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setSelectedArticle } from '../../redux/slices/articlesSlice'
import ArticleRate from '../article-rate/article-rate'

import './article-title.scss'

function ArticleTitle({ title, favoritesCount, authorUsername, article, slug }) {
  const dispatch = useDispatch()

  const handleTitleClick = () => {
    dispatch(setSelectedArticle(article))
  }

  return (
    <div className="title-wrapper">
      <div>
        <Link to={`/articles/${slug}`} onClick={handleTitleClick}>
          {title}
        </Link>
        <ArticleRate slug={slug} />
        <span>{favoritesCount}</span>
      </div>
      <span>{authorUsername}</span>
    </div>
  )
}

export default ArticleTitle
