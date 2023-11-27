import React from 'react'
import { List, Avatar } from 'antd'

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
        <List.Item key={item.title}>
          <List.Item.Meta
            title={
              <>
                <a href="#">{item.title}</a>
                <Avatar src="https://via.placeholder.com/48" />
              </>
            }
            description={item.content}
          />
          {item.content}
        </List.Item>
      )}
    />
  )
}

export default ArticleList
