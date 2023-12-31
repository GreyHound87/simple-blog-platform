import React, { useState } from 'react'
import { Form, Input, Button, Tag } from 'antd'
import PropTypes from 'prop-types'

import './article-form.scss'

function ArticleForm({ onSubmit, initialValues }) {
  const [tagList, setTagList] = useState(initialValues?.tagList || [])
  const [tagInput, setTagInput] = useState('')

  const handleTagAdd = () => {
    const trimmedInput = tagInput.trim()
    if (trimmedInput !== '') {
      const cleanedTags = trimmedInput.split(' ').map((tag) => tag.replace(/[^a-zA-Zа-яА-я0-9]/g, ''))

      setTagList((prevTagList) => {
        const updatedTagList = [
          ...prevTagList,
          ...cleanedTags.filter((newTag) => newTag && !prevTagList.includes(newTag)),
        ]
        return updatedTagList
      })

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
        htmlFor="titleInput"
        label={<span className="title-label">Title</span>}
        name="title"
        rules={[
          { required: true, message: 'Please enter the title' },
          { max: 50, message: 'Title should not exceed 50 characters.' },
        ]}
        style={{
          marginBottom: '3px',
        }}
      >
        <Input
          id="titleInput"
          className="title-input"
          placeholder="Title"
          style={{
            marginBottom: '12px',
          }}
        />
      </Form.Item>

      <Form.Item
        htmlFor="descriptionInput"
        label={<span className="description-label">Short Description</span>}
        name="description"
        rules={[
          { required: true, message: 'Please enter a short description' },
          { max: 400, message: 'Description should not exceed 400 characters.' },
        ]}
        style={{
          marginBottom: '3px',
        }}
      >
        <Input.TextArea
          id="descriptionInput"
          className="description-input"
          placeholder="Short Description"
          rows={1}
          style={{
            marginBottom: '12px',
            lineHeight: '30px',
          }}
        />
      </Form.Item>

      <Form.Item
        htmlFor="textInput"
        label={<span className="text-label">Text</span>}
        name="body"
        rules={[{ required: true, message: 'Please enter the text' }]}
        style={{
          marginBottom: '3px',
        }}
      >
        <Input.TextArea
          id="textInput"
          className="text-input"
          placeholder="Text"
          rows={5}
          style={{
            marginBottom: '20px',
            lineHeight: '30px',
          }}
        />
      </Form.Item>

      <Form.Item
        htmlFor="tagInput"
        label={<span className="tags-label">Tags</span>}
        name="tagList"
        style={{
          marginBottom: '16px',
        }}
      >
        <div>
          <div className="tags-wrapper">
            {tagList.map((tag) => (
              <div key={tag} className="tag-wrapper">
                <Tag className="article-form_tag">{tag}</Tag>
                <Button className="article-form_btn--del-tag" size="large" danger onClick={() => handleTagDelete(tag)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
          <div className="new-tag-wrapper">
            <Input
              id="tagInput"
              className="new-tag-input"
              placeholder="Tag"
              style={{
                marginBottom: '3px',
              }}
              maxLength={50}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onPressEnter={(e) => {
                e.preventDefault()
                handleTagAdd()
              }}
            />
            <Button className="article-form_btn--del-tag" size="large" danger onClick={clearTagInput}>
              Delete
            </Button>
            <Button className="article-form_btn--add-tag" size="large" onClick={handleTagAdd}>
              Add Tag
            </Button>
          </div>
        </div>
      </Form.Item>

      <Form.Item>
        <Button className="article-form_btn" size="large" type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  )
}

ArticleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
  }),
}

ArticleForm.defaultProps = {
  initialValues: {},
}

export default ArticleForm
