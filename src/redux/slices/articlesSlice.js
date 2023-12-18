import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: [],
  selectedArticle: null,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => ({
      ...state,
      articles: action.payload,
    }),
    setSelectedArticle: (state, action) => ({
      ...state,
      selectedArticle: action.payload,
    }),
  },
})

export const { setArticles, setSelectedArticle } = articlesSlice.actions
export default articlesSlice.reducer
