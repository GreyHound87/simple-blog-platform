import React from 'react'
import { Avatar, Card } from 'antd'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'
import ResIcon from '../res-icon/res-icon'
import ArticleMeta from '../article-meta/article-meta'

import './single-article.scss'

const { Meta } = Card

function SingleArticle() {
  const inCard = true
  const selectedArticle = useSelector((state) => state.articles.selectedArticle)

  if (!selectedArticle) {
    return null
  }

  const { title, favoritesCount, tagList, createdAt, description, body, author, slug, favorited } = selectedArticle
  return (
    <Card
      className="article-card"
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
          <ArticleDescription tagList={tagList} createdAt={createdAt} />
        </>
      }
      extra={<Avatar src={author.image} size={46} icon={<ResIcon />} alt="Author Avatar" />}
    >
      <Meta description={<ArticleMeta description={description} slug={slug} />} />
      <ReactMarkdown>{body}</ReactMarkdown>
    </Card>
  )
}

export default SingleArticle
