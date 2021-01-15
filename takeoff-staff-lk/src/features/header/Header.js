import React, { useState, useRef } from 'react';
import {useDispatch, useSelector } from 'react-redux';

import {getIsLoggedIn, getLoggedUser, clearAuthUser} from './../login/loginSlice';
import {setAddContactMode} from './../contacts/addContact/addContactSlice';

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

      <div className = "header-center">
        {isLoggedIn && (
          <div>
            <button
              className="header__contact-btn"
              onClick = {()=>{
                dispatch(setAddContactMode(true));
              }}>
              <img className="header__add-contact-icon" src="../icons/add_icon.png" alt="add"/>
              Add contact
            </button>
          </div>
        )}
      </div>

      <div className="header-left">
        {isLoggedIn && (
          <button  className="header__contact-btn"
            onClick={()=>{ dispatch(clearAuthUser())}}
            >
            <img
              className="header-logout"
              src="../icons/logout_icon.png"
              alt="logout"
            />
            log out
          </button>
        )}

        {!isLoggedIn && (
            <a href="../data/auth-data.json" target="blank">JSON со списком логинов и паролей</a>
        )}
      </div>

    </article>
  )
}