import { createSlice } from '@reduxjs/toolkit';

const deleteContactSlice = createSlice({
  name: 'deleteContact',
  initialState: {
    isDeleteContactMode:false,
    deleteId: null,
  },
  reducers: {
    startDeleteContactAction: (state, action) => {
      state.isDeleteContactMode = true;
      state.deleteId = action.payload;
    },
    stopDeleteContactAction: (state) => {
      state.isDeleteContactMode = false;
      state.deleteId = null;
    }
  },
});

export const {
  setDeleteContactMode,
  startDeleteContactAction,
  stopDeleteContactAction} = deleteContactSlice.actions;

export const getDeleteContactMode = state => {
  return state.deleteContact.isDeleteContactMode;
};

export const getDeleteId = state => {
  return state.deleteContact.deleteId;
}

export default deleteContactSlice.reducer;