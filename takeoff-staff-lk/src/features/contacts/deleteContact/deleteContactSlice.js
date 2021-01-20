import { createSlice } from '@reduxjs/toolkit';

const deleteContactSlice = createSlice({
  name: 'deleteContact',
  initialState: {
    isDeleteContactMode:false,
    deleteId: null,
  },
  reducers: {
    setDeleteContactMode: (state, action) => {
      state.isDeleteContactMode = action.payload.mode;
      state.deleteId = action.payload.id;

      if (!state.isDeleteContactMode ) {
        state.deleteId = null;
      }
    },
    setDeleteId: (state, action) => {
      state.deleteId = action.payload;
    }
  },
});

export const { setDeleteContactMode, setDeleteId } = deleteContactSlice.actions;

export const getDeleteContactMode= state => {
  return state.deleteContact.isDeleteContactMode;
};

export const getDeleteId = state => {
  return state.deleteContact.deleteId;
}

export default deleteContactSlice.reducer;