import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../header/header'
import ArticleList from '../article-list/article-list'
import SingleArticle from '../single-article/single-article'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/articles/:slug" component={SingleArticle} />
          <Route path="/articles" component={ArticleList} />
          <Route path="/" component={ArticleList} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
