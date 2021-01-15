import { createSlice } from '@reduxjs/toolkit';

function getMaxId (arr) {
  const a = arr.map((el)=>{
    return el.contactId;
  });
  return Math.max(...a);
}

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState: {
    list: [],
  },
  reducers: {
    setContactList: (state, action) => {
      state.list = action.payload;
    },
    addContactAction: (state, action) => {
      state.list.push({
        contactId:getMaxId([...state.list])+1,
        contactName: action.payload.contactName,
        contactPhone: action.payload.contactPhone,
      })
    },
    deleteContactAction: (state, action) => {

    }
  },
});

export const {setContactList, addContactAction, deleteContactAction} = contactListSlice.actions;

export const getContactList = state => state.contactList.list;

export default contactListSlice.reducer;