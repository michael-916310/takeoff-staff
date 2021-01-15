import React, { useState, useRef } from 'react';
import {useDispatch, useSelector } from 'react-redux';

import {getIsLoggedIn, getLoggedUser, clearAuthUser} from './../login/loginSlice';

import './header.scss';

export function Header(){

  const isLoggedIn = useSelector(getIsLoggedIn);
  const loggedUser = useSelector(getLoggedUser);

  const dispatch = useDispatch();

  return (
    <article className="header-container">

      <div className = "header-right">
        {!isLoggedIn && (
            <span>
              Тестовое задание Takeoff Staff
            </span>
        )}

        {isLoggedIn && (
            <span>
              Пользователь: {loggedUser}
            </span>
        )}
      </div>

      <div className="header-left">
        {isLoggedIn && (
            <img
              className="header-logout"
              src="../icons/logout_icon.png"
              alt="logout"
              onClick={()=>{ dispatch(clearAuthUser())}}
            />
        )}

        {!isLoggedIn && (
            <a href="../data/auth-data.json" target="blank">JSON со списком логинов и паролей</a>
        )}
      </div>

    </article>
  )
}