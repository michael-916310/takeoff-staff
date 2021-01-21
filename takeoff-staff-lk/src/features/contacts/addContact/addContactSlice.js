import { createSlice } from '@reduxjs/toolkit';

export const addContactSlice = createSlice({
  name: 'addContact',
  initialState: {
    isAddContactMode:false,
  },
  reducers: {
    stopAddContactAction: (state) => {
      state.isAddContactMode = false;
    },
    startAddContactAction: (state) => {
      state.isAddContactMode = true;
    },
  },
});

export const {
  startAddContactAction,
  stopAddContactAction } = addContactSlice.actions;

export const getAddContactMode = state => {
  return state.addContact.isAddContactMode;
};

export default addContactSlice.reducer;