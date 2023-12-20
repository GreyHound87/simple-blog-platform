import React, { useEffect, useState } from 'react'
import { Avatar, Card, message, Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { useParams, useHistory } from 'react-router-dom'

import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'
import ResIcon from '../res-icon/res-icon'
import ArticleMeta from '../article-meta/article-meta'
import api from '../../services/api'
import { setSelectedArticle } from '../../redux/slices/articlesSlice'
import './single-article.scss'

const { Meta } = Card

function SingleArticle() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { slug } = useParams()
  const [loading, setLoading] = useState(false)
  const inCard = true
  const cardBodyStyle = {
    padding: '16px',
  }
  const cardHeadStyle = {
    padding: '0 16px',
  }
  const selectedArticle = useSelector((state) => state.articles.selectedArticle)

  message.config({
    maxCount: 1,
  })

  useEffect(() => {
    const getArticleData = async () => {
      try {
        setLoading(true)
        const articleData = await api.getArticle(slug)
        dispatch(setSelectedArticle(articleData))
      } catch (error) {
        message.error('Error fetching article data')
        history.push('/')
      } finally {
        setLoading(false)
      }
    }

    getArticleData()
  }, [dispatch, slug, history])

  if (!selectedArticle) {
    return null
  }

  const { title, favoritesCount, tagList, createdAt, description, body, author, favorited } = selectedArticle
  return (
    <Card
      className="article-card"
      bodyStyle={cardBodyStyle}
      headStyle={cardHeadStyle}
      loading={loading}
      title={
        <Spin spinning={loading} size="large">
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
        </Spin>
      }
      extra={
        <Spin spinning={loading} size="large">
          <Avatar src={author.image} size={46} icon={<ResIcon />} alt="Author Avatar" />
        </Spin>
      }
    >
      <Meta
        className="card-meta"
        description={<ArticleMeta description={description} slug={slug} author={author.username} />}
      />
      <ReactMarkdown className="card-body">{body}</ReactMarkdown>
    </Card>
  )
}

export default SingleArticle
