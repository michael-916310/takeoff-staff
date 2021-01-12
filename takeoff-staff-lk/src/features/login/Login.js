import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './login.scss';

export function Login(){
  return (
    <article className='login-comp__container'>

      <div>
        <input className='login-comp__input' type='text' placeholder='login'/>
      </div>

      <div className='login-comp__line'>
        <input className='login-comp__input' type='text' placeholder='password'/>
      </div>

      <div className='login-comp__line'>
        <input className='login-comp__input login-comp__btn' type='button' value = "log in"/>
      </div>

    </article>
  )
}