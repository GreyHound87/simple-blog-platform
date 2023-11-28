import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: [],
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.articles = action.payload
    },
  },
})

export const { setArticles } = articlesSlice.actions
export default articlesSlice.reducer
