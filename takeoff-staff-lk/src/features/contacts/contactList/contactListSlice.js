import { createSlice } from '@reduxjs/toolkit';

function getMaxId (arr) {
  const a = arr.map((el)=>{
    return el.contactId;
  });
  return Math.max(...a, 0);
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
      state.list = state.list.filter((el)=>{
        return (el.contactId !== action.payload);
      });
    },
    updateContactAction: (state, action) => {
      state.list = state.list.map((el) => {
        if (el.contactId === action.payload.contactId) {
          return {
            contactId: action.payload.contactId,
            contactName: action.payload.contactName,
            contactPhone: action.payload.contactPhone,
          }
        } else {
          return {...el}
        }
      })
    }
  },
});

export const {
  setContactList,
  addContactAction,
  deleteContactAction,
  updateContactAction} = contactListSlice.actions;

export const getContactList = state => state.contactList.list;

export default contactListSlice.reducer;