import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setSelectedArticle } from '../../redux/slices/articlesSlice'
import ArticleRate from '../article-rate/article-rate'

import './article-title.scss'

function ArticleTitle({ title, favoritesCount, authorUsername, article, slug, favorited, inCard }) {
  const dispatch = useDispatch()
  const [currentFavoritesCount, setCurrentFavoritesCount] = useState(favoritesCount)
  const [currentFavorited, setCurrentFavorited] = useState(favorited)

  const handleTitleClick = () => {
    dispatch(setSelectedArticle(article))
  }

  const handleLikeUpdate = () => {
    setCurrentFavoritesCount((prevCount) => (currentFavorited ? prevCount - 1 : prevCount + 1))
    setCurrentFavorited((prevFavorited) => !prevFavorited)
  }

  return (
    <div className={`title-wrapper ${inCard ? 'title-wrapper--in-card' : ''}`}>
      <div>
        <Link to={`/articles/${slug}`} onClick={handleTitleClick}>
          <span className={`item-title ${inCard ? 'item-title--in-card' : ''}`}>{title}</span>
        </Link>
        <ArticleRate slug={slug} favorited={favorited} onLikeUpdate={handleLikeUpdate} />
        <span className={`rate-count ${inCard ? 'rate-count--in-card' : ''}`}>{currentFavoritesCount}</span>
      </div>
      <span className={`author-name ${inCard ? 'author-name--in-card' : ''}`}>{authorUsername}</span>
    </div>
  )
}

export default ArticleTitle
