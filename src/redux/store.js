import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import articlesReducer from './slices/articlesSlice'

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
