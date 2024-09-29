import { createSlice } from '@reduxjs/toolkit';
import { addCampers, fetchCamperById, fetchCampers } from './operations';

const handlePending = state => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    totalPage: '',
    loading: false,
    error: null,
    selected: [],
    camperDetails: {},
  },
  reducers: {
    setCamperSelected(state, action) {
      state.selected = state.selected.concat(action.payload);
    },
    removeCamperFromSelected(state, action) {
      const index = state.selected.findIndex(
        camper => camper.id === action.payload.id
      );
      state.selected.splice(index, 1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.items;
        state.totalPage = Math.ceil(action.payload.total / 4);
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(addCampers.pending, handlePending)
      .addCase(addCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.concat(action.payload.items);
      })
      .addCase(addCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.camperDetails = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});
export const { setCamperSelected, removeCamperFromSelected } =
  campersSlice.actions;
export const campersReducer = campersSlice.reducer;
