import React from 'react'

import Header from '../header/header'
import ArticleList from '../article-list/article-list'
import SingleArticle from '../single-article/single-article'

function App() {
  return (
    <>
      <Header />
      <main>
        <ArticleList />
        <SingleArticle />
      </main>
    </>
  )
}

export default App
