import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getIsLoggedIn, loginAction, getFailLoginMessage, getLoginAttempts} from './loginSlice';

import './login.scss';

export function Login(){

  const isLoggedIn = useSelector(getIsLoggedIn);
  const failLoginMessage = useSelector(getFailLoginMessage);
  const loginAttempts = useSelector(getLoginAttempts);

  const dispatch = useDispatch();

  const userNameEl = useRef('');
  const userPswEl = useRef('');

  return !isLoggedIn && (
    <form className='login-comp__container'>

      <div>
        <input className='login-comp__input' type='text' placeholder='login' ref={userNameEl}/>
      </div>

      <div className='login-comp__line'>
        <input className='login-comp__input' type='text' placeholder='password' ref={userPswEl}/>
      </div>

      <div className='login-comp__line'>
        <input
          className='login-comp__input login-comp__btn'
          type='submit'
          value = "login"
          onClick={(e) => {
            e.preventDefault();
            dispatch(loginAction(userNameEl.current.value, userPswEl.current.value))
            }
          }
        />
      </div>

      {
        (loginAttempts>0) && (
        <div>
          <p>login attempts: {loginAttempts}</p>
          <p>login result: {failLoginMessage}</p>
        </div>
        )
      }

    </form>
  )
}