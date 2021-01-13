import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setAuthUser, getIsLoggedIn} from './loginSlice';

import './login.scss';

export function Login(){
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  return !isLoggedIn && (
    <article className='login-comp__container'>

      <div>
        <input className='login-comp__input' type='text' placeholder='login'/>
      </div>

      <div className='login-comp__line'>
        <input className='login-comp__input' type='text' placeholder='password'/>
      </div>

      <div className='login-comp__line'>
        <input
          className='login-comp__input login-comp__btn'
          type='button'
          value = "login"
          onClick={() =>
            dispatch(setAuthUser('user'))
          }
        />
      </div>

    </article>
  )
}