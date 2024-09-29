import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIsOpen: false,
    modalImageSrc: '',
    modalImageAlt: '',
  },
  reducers: {
    openModal(state, action) {
      state.modalIsOpen = true;
      state.modalImageSrc = action.payload.img;
      state.modalImageAlt = action.payload.alt;
    },
    closeModal(state) {
      state.modalIsOpen = false;
      state.modalImageSrc = '';
      state.modalImageAlt = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
