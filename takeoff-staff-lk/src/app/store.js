import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../features/login/loginSlice';
import addContactReducer from '../features/contacts/addContact/addContactSlice';
import contactListSlice from '../features/contacts/contactList/contactListSlice';

export default configureStore({
  reducer: {
    auth: loginReducer,
    addContact: addContactReducer,
    contactList: contactListSlice,
  },
});
