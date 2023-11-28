import React, { useEffect, useState } from 'react'
import { List, Avatar, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { setArticles } from '../../redux/slices/articlesSlice'
import ArticleRate from '../article-rate/article-rate'

import './article-list.scss'

const fetchDataFromAPI = async (offset, limit) => {
  const url = 'https://blog.kata.academy/api/articles'
  const params = new URLSearchParams({
    offset,
    limit,
  })
  const response = await fetch(`${url}?${params}`)
  const data = await response.json()
  return data.articles
}

function ArticleList() {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.articles.articles)
  const [offset, setOffset] = useState(0)
  const limit = 5

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await fetchDataFromAPI(offset, limit)
        dispatch(setArticles(data))
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
        total: 50,
        onChange: (page) => setOffset((page - 1) * limit),
      }}
      renderItem={(item) => (
        <List.Item key={item.slug} extra={<Avatar src={item.author.image} size={46} />}>
          <List.Item.Meta
            title={
              <div className="title-wrapper">
                <div>
                  <a href="#">{item.title}</a>
                  <ArticleRate />
                  <span>{item.favoritesCount}</span>
                </div>
                <span>{item.author.username}</span>
              </div>
            }
            description={
              <div className="description-wrapper">
                <div className="tags-container">
                  {item.tagList.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <span>{item.createdAt}</span>
              </div>
            }
          />
          {item.body}
        </List.Item>
      )}
    />
  )
}

export default ArticleList
