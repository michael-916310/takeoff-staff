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

/*
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

*/

export const loginAction = (userName, userPsw) => dispatch => {
  console.log('loginAction', userName, userPsw);
  login(userName, userPsw)
    .then((res)=>{dispatch(setAuthUser(userName));})
};

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getLoggedUser = state => state.auth.userName;

export default loginSlice.reducer;