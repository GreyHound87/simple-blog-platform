import React from 'react'
import { Avatar, Card } from 'antd'
import ReactMarkdown from 'react-markdown'

import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'
import ResIcon from '../res-icon/res-icon'

const { Meta } = Card

const article = {
  slug: 'posle-pravok-5thvca',
  title: 'После правок',
  description: 'Вносим правочки, почитайте, полезно.',
  body: 'Нужные правки:\n- при создании статьи нет валидации на пробелы\n- отображаюстся пустые теги',
  createdAt: '2023-11-27T16:00:21.464Z',
  updatedAt: '2023-11-29T10:34:08.089Z',
  tagList: ['Нет пустым тэгам', 'Правки'],
  favorited: false,
  favoritesCount: 4,
  author: {
    username: 'krabster',
    image: 'https://android-obzor.com/wp-content/uploads/2022/03/a-3.jpg',
    following: false,
  },
}

function SingleArticle() {
  return (
    <Card
      style={{ width: '100%' }}
      extra={<Avatar src={article.author.image} icon={<ResIcon />} alt="Author Avatar" />}
    >
      <Meta
        description={<ArticleDescription tagList={article.tagList} createdAt={article.createdAt} />}
        title={
          <ArticleTitle
            title={article.title}
            favoritesCount={article.favoritesCount}
            authorUsername={article.author.username}
          />
        }
      />
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </Card>
  )
}

export default SingleArticle
