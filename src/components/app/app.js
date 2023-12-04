import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from '../header/header'
import ArticleList from '../article-list/article-list'
import SingleArticle from '../single-article/single-article'
import Login from '../login/login'
import Signup from '../sign-up/sign-up'
import { reLoginUserAsync } from '../../redux/slices/authSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
      dispatch(reLoginUserAsync(authToken))
    }
  }, [dispatch])

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/sign-up" component={Signup} />
          <Route path="/sign-in" component={Login} />
          <Route path="/articles/:slug" component={SingleArticle} />
          <Route path="/articles" component={ArticleList} />
          <Route path="/" component={ArticleList} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
