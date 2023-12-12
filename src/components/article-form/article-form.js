import React, { useState } from 'react'
import { Form, Input, Button, Tag } from 'antd'

function ArticleForm({ onSubmit, initialValues }) {
  const [tags, setTags] = useState(initialValues?.tags || [])
  const [tagInput, setTagInput] = useState('')

  const handleTagAdd = () => {
    if (tagInput.trim() !== '' && !tags.includes(tagInput)) {
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }

  const handleTagDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete))
  }

  const handleSubmit = (values) => {
    onSubmit({ ...values, tags })
  }

  return (
    <Form
      name="articleForm"
      className="article-form"
      layout="vertical"
      requiredMark={false}
      initialValues={initialValues}
      onFinish={handleSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label={<span className="title-label">Title</span>}
        name="title"
        rules={[{ required: true, message: 'Please enter the title' }]}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        label={<span className="description-label">Short Description</span>}
        name="description"
        rules={[{ required: true, message: 'Please enter a short description' }]}
      >
        <Input.TextArea placeholder="Short Description" />
      </Form.Item>

      <Form.Item
        label={<span className="text-label">Text</span>}
        name="body"
        rules={[{ required: true, message: 'Please enter the text' }]}
      >
        <Input.TextArea placeholder="Text" />
      </Form.Item>

      <Form.Item label={<span className="tags-label">Tags</span>} name="tagList">
        <div className="tags-container">
          {tags.map((tag) => (
            <Tag key={tag} className="article-form_tag" closable onClose={() => handleTagDelete(tag)}>
              {tag}
            </Tag>
          ))}

          <Input
            placeholder="New Tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onPressEnter={handleTagAdd}
            onBlur={handleTagAdd}
          />
        </div>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button className="article-form_btn" type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ArticleForm
