import React, { useEffect, useState } from 'react'
import { List, Avatar, Spin, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { setArticles } from '../../redux/slices/articlesSlice'
import ArticleTitle from '../article-title/article-title'
import ArticleDescription from '../article-description/article-description'
import ResIcon from '../res-icon/res-icon'
import api from '../../services/api'

import './article-list.scss'

function ArticleList() {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.articles.articles)
  const [offset, setOffset] = useState(0)
  const limit = 5
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        const data = await api.fetchData(offset, limit)
        dispatch(setArticles(data.articles))
        setTotal(data.articlesCount)
      } catch (error) {
        message.error(`Error fetching data: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [dispatch, offset, limit])

  return (
    <List
      className="list"
      itemLayout="vertical"
      size="small"
      dataSource={articles}
      pagination={{
        size: 'small',
        defaultPageSize: limit,
        total,
        showSizeChanger: false,
        onChange: (page) => setOffset((page - 1) * limit),
      }}
      renderItem={(item) => (
        <List.Item
          key={item.slug}
          extra={
            <Spin spinning={loading} size="large">
              <Avatar className="avatar" src={item.author.image} icon={<ResIcon />} size={46} alt="Author Avatar" />
            </Spin>
          }
          className="item"
        >
          <List.Item.Meta
            title={
              <Spin spinning={loading}>
                <ArticleTitle
                  title={item.title}
                  favoritesCount={item.favoritesCount}
                  authorUsername={item.author.username}
                  article={item}
                  slug={item.slug}
                  favorited={item.favorited}
                />
              </Spin>
            }
            description={<ArticleDescription tagList={item.tagList} createdAt={item.createdAt} />}
          />
          <Spin spinning={loading} size="large">
            <span className="list-item-descr">{item.description}</span>
          </Spin>
        </List.Item>
      )}
    />
  )
}

export default ArticleList
