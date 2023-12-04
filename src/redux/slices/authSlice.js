import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../services/api'

export const registerUserAsync = createAsyncThunk('auth/registerUser', async (userData) => api.registerUser(userData))

export const loginUserAsync = createAsyncThunk('auth/loginUser', async (credentials) => api.loginUser(credentials))

export const reLoginUserAsync = createAsyncThunk('auth/reLoginUser', async (authToken) => api.reLoginUser(authToken))

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
        state.user = action.payload.user
        console.log(state.user)
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false
        // eslint-disable-next-line no-param-reassign
        state.error = action.error.message
      })
      .addCase(loginUserAsync.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = true
        // eslint-disable-next-line no-param-reassign
        state.error = null
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false
        // eslint-disable-next-line no-param-reassign
        state.user = action.payload.user
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false
        // eslint-disable-next-line no-param-reassign
        state.error = action.error.message
      })
      .addCase(reLoginUserAsync.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = true
        // eslint-disable-next-line no-param-reassign
        state.error = null
      })
      .addCase(reLoginUserAsync.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false
        // eslint-disable-next-line no-param-reassign
        state.user = action.payload
        console.log(state.user)
      })
      .addCase(reLoginUserAsync.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false
        // eslint-disable-next-line no-param-reassign
        state.error = action.error.message
      })
  },
})

export default authSlice.reducer
