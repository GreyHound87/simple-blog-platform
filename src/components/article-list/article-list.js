import React, { useEffect } from 'react'
import { List, Avatar, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { setArticles } from '../../redux/slices/articlesSlice'
import ArticleRate from '../article-rate/article-rate'

import './article-list.scss'

function ArticleList() {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.articles.articles)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromAPI()
        dispatch(setArticles(data))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [dispatch])
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      pagination={{ defaultPageSize: 5, hideOnSinglePage: true }}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" size={46} />}
        >
          <List.Item.Meta
            title={
              <div className="title-wrapper">
                <div>
                  <a href="#">{item.title}</a>
                  <ArticleRate />
                  <span>{item.likes}</span>
                </div>

                <span>{item.author}</span>
              </div>
            }
            description={
              <div className="description-wrapper">
                <div className="tags-container">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <span>{item.date}</span>
              </div>
            }
          />
          {item.content}
        </List.Item>
      )}
    />
  )
}

export default ArticleList
