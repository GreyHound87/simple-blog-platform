import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

function ArticleMeta({ description, slug }) {
  const onDelete = () => {}

  return (
    <div>
      {description}
      <Button type="text" className="article_btn--del" onClick={onDelete}>
        Delete
      </Button>
      <Link to={`/articles/${slug}/edit`}>
        <Button type="link" className="article_btn--edit">
          Edit
        </Button>
      </Link>
    </div>
  )
}

export default ArticleMeta
