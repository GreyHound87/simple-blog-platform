import React from 'react'

/* import { useParams } from 'react-router-dom' */
import { useSelector } from 'react-redux'
import { Typography } from 'antd'

import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'

const { Title, Paragraph } = Typography

function SingleArticle() {
  /* const { slug } = useParams() */
  const articles = useSelector((state) => state.articles.articles)
  /* const article = articles.find((a) => a.slug === slug) */

  /* if (!article) {
    return <div>Статья не найдена</div>
  } */

  return (
    <div>
      <ArticleTitle />
      <ArticleDescription />
      <Paragraph>{article.body}</Paragraph>
    </div>
  )
}

export default SingleArticle
