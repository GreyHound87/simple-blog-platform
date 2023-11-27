import React from 'react'
import { List, Avatar } from 'antd'

import './article-list.scss'

const data = [
  {
    title: 'Ant Design Title 1',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    title: 'Ant Design Title 2',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    title: 'Ant Design Title 3',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    title: 'Ant Design Title 4',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
]

function ArticleList() {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.title} extra={<Avatar src="https://via.placeholder.com/48" />}>
          <List.Item.Meta
            title={
              <div className="title-wrapper">
                <a href="#">{item.title}</a>
                <span> Ivanov Ivan Ivanovich</span>
              </div>
            }
            description={
              <div className="description-wrapper">
                <div className="tags-container"> tag </div>
                <span> date </span>
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
