import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../services/api'

export const registerUserAsync = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await api.registerUser(userData)
  return response.data
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = true
        // eslint-disable-next-line no-param-reassign
        state.error = null
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false
        // eslint-disable-next-line no-param-reassign
        state.user = action.payload
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false
        // eslint-disable-next-line no-param-reassign
        state.error = action.error.message
      })
  },
})

export default authSlice.reducer
