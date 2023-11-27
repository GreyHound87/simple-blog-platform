import React from 'react'
import { List, Avatar, Tag } from 'antd'

import ArticleRate from '../article-rate/article-rate'

import './article-list.scss'

const data = [
  {
    title: 'Ant Design Title 1',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    author: 'John Doe',
    date: '2023-11-27',
    tags: ['React', 'Ant Design', 'UI'],
  },
  {
    title: 'Ant Design Title 2',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    author: 'Jane Doe',
    date: '2023-11-28',
    tags: ['JavaScript', 'Frontend', 'Design'],
  },
  {
    title: 'Ant Design Title 3',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    author: 'Bob Smith',
    date: '2023-11-29',
    tags: ['CSS', 'Web Development'],
  },
  {
    title: 'Ant Design Title 4',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    author: 'Alice Johnson',
    date: '2023-11-30',
    tags: ['UI/UX', 'Responsive Design'],
  },
]

function ArticleList() {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
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
                  <span> 999 </span>
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
