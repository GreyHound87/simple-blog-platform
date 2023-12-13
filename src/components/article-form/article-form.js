import React, { useState } from 'react'
import { Form, Input, Button, Tag } from 'antd'
import './article-form.scss'

function ArticleForm({ onSubmit, initialValues }) {
  const [tags, setTags] = useState(initialValues?.tags || [])
  const [tagInput, setTagInput] = useState('')

  const handleTagAdd = () => {
    if (tagInput.trim() !== '' && !tags.includes(tagInput)) {
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }

  const clearTagInput = () => {
    setTagInput('')
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
        <>
          <div className="tags-container">
            {tags.map((tag) => (
              <div key={tag} className="tag-container">
                <Tag className="article-form_tag">{tag}</Tag>
                <Button type="primary" danger onClick={() => handleTagDelete(tag)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
          <div className="new-tag-container">
            <Input
              className="new-tag-input"
              placeholder="New Tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onPressEnter={handleTagAdd}
            />
            <Button type="primary" danger onClick={() => clearTagInput}>
              Delete
            </Button>
            <Button type="primary" onClick={handleTagAdd}>
              Add Tag
            </Button>
          </div>
        </>
      </Form.Item>

      <Form.Item>
        <Button className="article-form_btn" type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ArticleForm
