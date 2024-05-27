import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: {},
  error: null,
  failure: null,
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.data = {};
      state.error = null;
      state.failure = null;
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.data = action.payload.data;
      state.error = null;
      state.failure = null;
      state.isLoading = false;
    },
    loginFailure: (state, action) => {
      state.data = {};
      state.error = null;
      state.failure = action.payload.data;
      state.isLoading = false;
    },
    loginError: (state, action) => {
      state.data = {};
      state.error = action.payload.data;
      state.failure = null;
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = loginSlice;
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  loginError,
  loginReset
} = actions;

export default reducer;
