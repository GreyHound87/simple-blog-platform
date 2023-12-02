import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import articlesReducer from './slices/articlesSlice'
import authReducer from './slices/authSlice'

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
