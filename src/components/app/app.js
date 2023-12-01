import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../header/header'
import ArticleList from '../article-list/article-list'
import SingleArticle from '../single-article/single-article'
import Login from '../login/login'

function App() {
  return (
    <Router>
      <Header />
      <Login />
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
