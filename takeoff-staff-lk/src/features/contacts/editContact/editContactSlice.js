import { createSlice } from '@reduxjs/toolkit';

const editContactSlice = createSlice({
  name: 'editContact',
  initialState: {
    isEditMode: false,
    editId: null,
  },
  reducers: {
    startEditContactAction: (state, action) => {
      state.isEditMode = true;
      state.editId = action.payload;
    },
    stopEditContactAction: (state) => {
      state.isEditMode = false;
      state.editId = null;
    }
  }
})

export const {
  startEditContactAction,
  stopEditContactAction } = editContactSlice.actions;

export const getEditContactMode = (state) => {
  return state.editContact.isEditMode;
}

export const getEditContactId = (state) => {
  return state.editContact.editId;
}

export default editContactSlice.reducer;