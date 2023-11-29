import React, { useEffect, useState } from 'react'
import { List, Avatar } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { setArticles } from '../../redux/slices/articlesSlice'
import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'
import ResIcon from '../res-icon/res-icon'
import fetchDataFromAPI from '../../services/api'
import generateUniqueKey from '../../helpers/generate-unique-key'

import './article-list.scss'

function ArticleList() {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.articles.articles)
  const [offset, setOffset] = useState(0)
  const limit = 5
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await fetchDataFromAPI(offset, limit)
        const articlesWithId = data.articles.map((article) => ({
          ...article,
          id: generateUniqueKey(),
        }))
        dispatch(setArticles(articlesWithId))
        setTotal(data.articlesCount)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchArticles()
  }, [dispatch, offset, limit])

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={articles}
      pagination={{
        defaultPageSize: limit,
        total,
        showSizeChanger: false,
        onChange: (page) => setOffset((page - 1) * limit),
      }}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          extra={<Avatar src={item.author.image} icon={<ResIcon />} size={46} alt="Author Avatar" />}
        >
          <List.Item.Meta
            title={
              <ArticleTitle
                title={item.title}
                favoritesCount={item.favoritesCount}
                authorUsername={item.author.username}
              />
            }
            description={<ArticleDescription tagList={item.tagList} createdAt={item.createdAt} />}
          />
          {item.slug}
        </List.Item>
      )}
    />
  )
}

export default ArticleList
