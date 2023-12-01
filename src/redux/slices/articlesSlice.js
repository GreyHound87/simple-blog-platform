import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: [],
  selectedArticle: null,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.articles = action.payload
    },
    setSelectedArticle: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedArticle = action.payload
    },
  },
})

export const { setArticles, setSelectedArticle } = articlesSlice.actions
export default articlesSlice.reducer
