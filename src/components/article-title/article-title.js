import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { setSelectedArticle } from '../../redux/slices/articlesSlice'
import ArticleRate from '../article-rate/article-rate'
import textCutter from '../../helpers/text-cutter'

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
        {inCard ? (
          <span className="item-title item-title--in-card">{textCutter(title, 50)}</span>
        ) : (
          <Link to={`/articles/${slug}`} target="_blank" onClick={() => handleTitleClick}>
            <span className="item-title">{textCutter(title, 50)}</span>
          </Link>
        )}

        <ArticleRate slug={slug} favorited={favorited} onLikeUpdate={handleLikeUpdate} />
        <span className={`rate-count ${inCard ? 'rate-count--in-card' : ''}`}>{currentFavoritesCount}</span>
      </div>
      <span className={`author-name ${inCard ? 'author-name--in-card' : ''}`}>{authorUsername}</span>
    </div>
  )
}

ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  authorUsername: PropTypes.string.isRequired,
  article: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
    favorited: PropTypes.bool,
    favoritesCount: PropTypes.number,
    author: PropTypes.shape({
      username: PropTypes.string,
      image: PropTypes.string,
      following: PropTypes.bool,
    }),
  }),
  slug: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  inCard: PropTypes.bool,
}

ArticleTitle.defaultProps = {
  article: {},
  inCard: false,
}

export default ArticleTitle
