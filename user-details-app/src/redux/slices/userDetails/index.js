import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: {},
  error: null,
  failure: null,
  isLoading: false,
};

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    userDetailsStart: (state) => {
      state.data = {};
      state.error = null;
      state.failure = null;
      state.isLoading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.data = action.payload.data;
      state.error = null;
      state.failure = null;
      state.isLoading = false;
    },
    userDetailsFailure: (state, action) => {
      state.data = {};
      state.error = null;
      state.failure = action.payload.data;
      state.isLoading = false;
    },
    userDetailsError: (state, action) => {
      state.data = {};
      state.error = action.payload.data;
      state.failure = null;
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = userDetailsSlice;
export const {
  userDetailsStart,
  userDetailsSuccess,
  userDetailsFailure,
  userDetailsError,
  userDetailsReset
} = actions;

export default reducer;
