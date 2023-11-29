import React, { useEffect, useState } from 'react'
import { List, Avatar, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { setArticles } from '../../redux/slices/articlesSlice'
import ArticleRate from '../article-rate/article-rate'
import ResIcon from '../res-icon/res-icon'
import fetchDataFromAPI from '../../services/api'
import generateUniqueKey from '../../helpers/generate-unique-key'
import uniqueTags from '../../helpers/unique-tags'

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
                  {uniqueTags(item.tagList).map((tag) => (
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
