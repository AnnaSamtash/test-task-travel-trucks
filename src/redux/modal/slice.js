import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIsOpen: false,
    modalImagesSrc: [],
    modalImagesAlt: '',
    currentIndex: 0,
  },
  reducers: {
    openModal(state, action) {
      state.modalIsOpen = true;
      state.modalImagesSrc = action.payload.img;
      state.modalImagesAlt = action.payload.alt;
      state.currentIndex = 0;
    },
    closeModal(state) {
      state.modalIsOpen = false;
      state.modalImagesSrc = '';
      state.modalImagesAlt = '';
    },
    setCurrentIndex(state, action) {
      state.currentIndex = action.payload;
    },
  },
});

export const { openModal, closeModal, setCurrentIndex } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
