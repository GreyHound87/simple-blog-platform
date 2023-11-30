import React from 'react'
/* import { useParams } from 'react-router-dom' */
/* import { useSelector } from 'react-redux' */
import { Typography, Avatar } from 'antd'

import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'
import ResIcon from '../res-icon/res-icon'

const { Paragraph } = Typography

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
  /* const { slug } = useParams() */
  /* const articles = useSelector((state) => state.articles.articles) */
  /* const article = articles.find((a) => a.slug === slug) */

  /* if (!article) {
    return <div>Статья не найдена</div>
  } */

  return (
    <Typography>
      <ArticleTitle
        title={article.title}
        favoritesCount={article.favoritesCount}
        authorUsername={article.author.username}
      />
      <ArticleDescription tagList={article.tagList} createdAt={article.createdAt} />
      <Avatar src={article.author.image} icon={<ResIcon />} size={46} alt="Author Avatar" />
      <Paragraph>{article.body}</Paragraph>
    </Typography>
  )
}

export default SingleArticle
