import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setSelectedArticle } from '../../redux/slices/articlesSlice'
import ArticleRate from '../article-rate/article-rate'

import './article-title.scss'

function ArticleTitle({ title, favoritesCount, authorUsername, article, slug, favorited }) {
  const dispatch = useDispatch()
  const [currentFavoritesCount, setCurrentFavoritesCount] = useState(favoritesCount)
  const [currentFavorited, setCurrentFavorited] = useState(favorited)
  console.log('slug', slug)
  console.log('favorited', favorited)

  const handleTitleClick = () => {
    dispatch(setSelectedArticle(article))
  }

  const handleLikeUpdate = () => {
    setCurrentFavoritesCount((prevCount) => (currentFavorited ? prevCount - 1 : prevCount + 1))
    setCurrentFavorited((prevFavorited) => !prevFavorited)
  }

  return (
    <div className="title-wrapper">
      <div>
        <Link to={`/articles/${slug}`} onClick={handleTitleClick}>
          <span className="item-title">{title}</span>
        </Link>
        <ArticleRate slug={slug} favorited={favorited} onLikeUpdate={handleLikeUpdate} />
        <span className="rate-count">{currentFavoritesCount}</span>
      </div>
      <span className="author-name">{authorUsername}</span>
    </div>
  )
}

export default ArticleTitle
