import { createSlice } from '@reduxjs/toolkit';
import {login} from './../../app/utils';

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userName: '',
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    clearAuthUser: (state) =>{
      state.isLoggedIn = false;
      state.userName ='';
    },
  },
});

export const { setAuthUser, clearAuthUser} = loginSlice.actions;

export const loginAction = (userName, userPsw) => dispatch => {
  console.log('loginAction', userName, userPsw);
  login(userName, userPsw)
    .then((res)=>{
      if (res) {
        dispatch(setAuthUser(userName));
      }
    })
};

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getLoggedUser = state => state.auth.userName;

export default loginSlice.reducer;