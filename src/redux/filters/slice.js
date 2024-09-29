import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    values: {
      location: '',
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
      type: '',
    },
  },
  reducers: {
    setFilters(state, action) {
      state.values = Object.assign({}, state.values, action.payload);
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
