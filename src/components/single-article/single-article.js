import React from 'react'
import { Avatar, Card } from 'antd'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'
import ResIcon from '../res-icon/res-icon'

const { Meta } = Card

function SingleArticle() {
  const selectedArticle = useSelector((state) => state.articles.selectedArticle)

  if (!selectedArticle) {
    return null
  }

  const { title, favoritesCount, tagList, createdAt, description, body, author } = selectedArticle
  return (
    <Card
      title={
        <>
          <ArticleTitle title={title} favoritesCount={favoritesCount} authorUsername={author.username} />
          <ArticleDescription tagList={tagList} createdAt={createdAt} />
        </>
      }
      extra={<Avatar src={author.image} size={46} icon={<ResIcon />} alt="Author Avatar" />}
    >
      <Meta description={description} />
      <ReactMarkdown>{body}</ReactMarkdown>
    </Card>
  )
}

export default SingleArticle
