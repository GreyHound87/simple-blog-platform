import React, { useState } from 'react'
import { Form, Input, Button, Tag, Space } from 'antd'

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
      initialValues={initialValues}
      onFinish={handleSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Short Description"
        name="shortDescription"
        rules={[{ required: true, message: 'Please enter a short description' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Text" name="text" rules={[{ required: true, message: 'Please enter the text' }]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Tags" name="tags">
        <div>
          <Space>
            {tags.map((tag) => (
              <Tag key={tag} closable onClose={() => handleTagDelete(tag)}>
                {tag}
              </Tag>
            ))}
          </Space>
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
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ArticleForm
