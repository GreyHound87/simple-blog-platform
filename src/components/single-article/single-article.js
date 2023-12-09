import React, { useEffect } from 'react'
import { Avatar, Card } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'
import ResIcon from '../res-icon/res-icon'
import ArticleMeta from '../article-meta/article-meta'
import api from '../../services/api'
import { setSelectedArticle } from '../../redux/slices/articlesSlice'

const { Meta } = Card

function SingleArticle() {
  const dispatch = useDispatch()
  const { slug } = useParams()
  const inCard = true
  const cardBodyStyle = {
    padding: '16px',
  }
  const cardHeadStyle = {
    padding: '0 16px',
  }
  const selectedArticle = useSelector((state) => state.articles.selectedArticle)

  useEffect(() => {
    const getArticleData = async () => {
      try {
        const articleData = await api.getArticle(slug)
        dispatch(setSelectedArticle(articleData))
      } catch (error) {
        console.error('Error fetching article data:', error)
      }
    }

    getArticleData()
  }, [dispatch, slug])

  if (!selectedArticle) {
    return null
  }

  const { title, favoritesCount, tagList, createdAt, description, body, author, favorited } = selectedArticle
  return (
    <Card
      className="article-card"
      bodyStyle={cardBodyStyle}
      headStyle={cardHeadStyle}
      title={
        <>
          <ArticleTitle
            title={title}
            favoritesCount={favoritesCount}
            authorUsername={author.username}
            favorited={favorited}
            slug={slug}
            inCard={inCard}
          />
          <ArticleDescription tagList={tagList} createdAt={createdAt} inCard={inCard} />
        </>
      }
      extra={<Avatar src={author.image} size={46} icon={<ResIcon />} alt="Author Avatar" />}
    >
      <Meta
        className="card-meta"
        description={<ArticleMeta description={description} slug={slug} author={author.username} />}
      />
      <ReactMarkdown>{body}</ReactMarkdown>
    </Card>
  )
}

export default SingleArticle
