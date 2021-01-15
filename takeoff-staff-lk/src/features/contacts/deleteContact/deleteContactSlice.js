import { createSlice } from '@reduxjs/toolkit';

const deleteContactSlice = createSlice({
  name: 'deleteContact',
  initialState: {
    isDeleteContactMode:false,
  },
  reducers: {
    setDeleteContactMode: (state, action) => {
      state.isDeleteContactMode = action.payload;
    },
  },
});

export const { setDeleteContactMode } = deleteContactSlice.actions;

export const getDeleteContactMode= state => {
  return state.deleteContact.isDeleteContactMode;
};

export default deleteContactSlice.reducer;