import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    findContact(state, action) {
      return action.payload;
    },
  },
});

export const { findContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
