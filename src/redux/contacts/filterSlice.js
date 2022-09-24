import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, { payload }) {
      return (state = payload);
    },
    resetFilter(state) {
      return (state = '');
    },
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;
