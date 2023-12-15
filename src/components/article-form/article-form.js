import React, { useState } from 'react'
import { Form, Input, Button, Tag } from 'antd'
import './article-form.scss'

function ArticleForm({ onSubmit, initialValues }) {
  const [tagList, setTagList] = useState(initialValues?.tagList || [])
  const [tagInput, setTagInput] = useState('')

  const handleTagAdd = () => {
    if (tagInput.trim() !== '' && !tagList.includes(tagInput)) {
      setTagList([...tagList, tagInput.trim()])
      setTagInput('')
    }
  }

  const clearTagInput = () => {
    setTagInput('')
  }

  const handleTagDelete = (tagToDelete) => {
    setTagList(tagList.filter((tag) => tag !== tagToDelete))
  }

  const handleSubmit = (values) => {
    onSubmit({ ...values, tagList })
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
        style={{
          marginBottom: '3px',
        }}
      >
        <Input
          className="title-input"
          placeholder="Title"
          style={{
            marginBottom: '3px',
          }}
        />
      </Form.Item>

      <Form.Item
        label={<span className="description-label">Short Description</span>}
        name="description"
        rules={[{ required: true, message: 'Please enter a short description' }]}
        style={{
          marginBottom: '3px',
        }}
      >
        <Input.TextArea
          className="description-input"
          placeholder="Short Description"
          style={{
            marginBottom: '3px',
          }}
        />
      </Form.Item>

      <Form.Item
        label={<span className="text-label">Text</span>}
        name="body"
        rules={[{ required: true, message: 'Please enter the text' }]}
        style={{
          marginBottom: '3px',
        }}
      >
        <Input.TextArea
          className="text-input"
          placeholder="Text"
          style={{
            marginBottom: '3px',
          }}
        />
      </Form.Item>

      <Form.Item label={<span className="tags-label">Tags</span>} name="tagList">
        <>
          <div className="tags-wrapper">
            {tagList.map((tag) => (
              <div key={tag} className="tag-wrapper">
                <Tag className="article-form_tag">{tag}</Tag>
                <Button
                  className="article-form_btn--del-tag"
                  size="large"
                  type="primary"
                  danger
                  onClick={() => handleTagDelete(tag)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
          <div className="new-tag-wrapper">
            <Input
              className="new-tag-input"
              placeholder="New Tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onPressEnter={(e) => {
                e.preventDefault()
                handleTagAdd()
              }}
            />
            <Button className="article-form_btn--del-tag" size="large" type="primary" danger onClick={clearTagInput}>
              Delete
            </Button>
            <Button className="article-form_btn--add-tag" size="large" type="primary" onClick={handleTagAdd}>
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
