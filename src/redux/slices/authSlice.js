import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../services/api'

export const registerUserAsync = createAsyncThunk('auth/registerUser', async (userData) => api.registerUser(userData))

export const loginUserAsync = createAsyncThunk('auth/loginUser', async (credentials) => api.loginUser(credentials))

export const reLoginUserAsync = createAsyncThunk('auth/reLoginUser', async (authToken) => api.reLoginUser(authToken))

export const updateUserAsync = createAsyncThunk('auth/updateUser', async (userDetails) => api.updateUser(userDetails))

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    logoutUser: (state) => ({
      ...state,
      user: null,
    }),
    clearError: (state) => ({
      ...state,
      error: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        if (action.payload.errors) {
          return {
            ...state,
            loading: false,
            error: action.payload.errors,
          }
        }
        if (action.payload.user) {
          return {
            ...state,
            loading: false,
            user: action.payload.user,
          }
        }
        return state
      })
      .addCase(registerUserAsync.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(loginUserAsync.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        if (action.payload.errors) {
          return {
            ...state,
            loading: false,
            error: action.payload.errors,
          }
        }
        if (action.payload.user) {
          return {
            ...state,
            loading: false,
            user: action.payload.user,
          }
        }
        return state
      })
      .addCase(loginUserAsync.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(reLoginUserAsync.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(reLoginUserAsync.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        user: action.payload,
      }))
      .addCase(reLoginUserAsync.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(updateUserAsync.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        if (action.payload.errors) {
          return {
            ...state,
            loading: false,
            error: action.payload.errors,
          }
        }
        if (action.payload.user) {
          return {
            ...state,
            loading: false,
            user: action.payload.user,
          }
        }
        return state
      })
      .addCase(updateUserAsync.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
  },
})

export const { logoutUser } = authSlice.actions
export const { clearError } = authSlice.actions

export default authSlice.reducer
