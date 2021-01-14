import { createSlice } from '@reduxjs/toolkit';
import {login} from './../../app/utils';

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userName: '',
    failLoginMessage: '',
    loginAttempts: 0,
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
    setFailLoginMessage: (state) => {
      state.failLoginMessage = 'incorrect login or password';
    },
    incrementLoginAttempts: (state) => {
      state.loginAttempts ++;
    }
  },
});

//export const { setAuthUser, clearAuthUser, setFailLoginMessage} = loginSlice.actions;
const { setAuthUser, setFailLoginMessage, incrementLoginAttempts} = loginSlice.actions;

export const loginAction = (userName, userPsw) => dispatch => {
  login(userName, userPsw)
    .then((res)=>{
      dispatch(incrementLoginAttempts());
      if (res) {
        dispatch(setAuthUser(userName));
      } else {
        dispatch(setFailLoginMessage());
      }
    })
};

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getLoggedUser = state => state.auth.userName;
export const getFailLoginMessage = state => state.auth.failLoginMessage;
export const getLoginAttempts = state => state.auth.loginAttempts;

export default loginSlice.reducer;