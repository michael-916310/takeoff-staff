import { createSlice } from '@reduxjs/toolkit';

export const addContactSlice = createSlice({
  name: 'addContact',
  initialState: {
    isAddContactMode:false,
  },
  reducers: {
    setAddContactMode: (state, action) => {
      state.isAddContactMode = action.payload;
    },
  },
});

export const { setAddContactMode } = addContactSlice.actions;

export const getAddContactMode = state => {
  //console.log('getAddContactMode', state.addContact.isAddContactMode);
  return state.addContact.isAddContactMode;
};

export default addContactSlice.reducer;