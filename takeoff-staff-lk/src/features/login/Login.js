import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getIsLoggedIn, loginAction} from './loginSlice';

import './login.scss';

export function Login(){
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  const userNameEl = useRef('');
  const userPswEl = useRef('');

  return !isLoggedIn && (
    <article className='login-comp__container'>

      <div>
        <input className='login-comp__input' type='text' placeholder='login' ref={userNameEl}/>
      </div>

      <div className='login-comp__line'>
        <input className='login-comp__input' type='text' placeholder='password' ref={userPswEl}/>
      </div>

      <div className='login-comp__line'>
        <input
          className='login-comp__input login-comp__btn'
          type='button'
          value = "login"
          onClick={() =>
            dispatch(loginAction(userNameEl.current.value, userPswEl.current.value))
          }
        />
      </div>

    </article>
  )
}