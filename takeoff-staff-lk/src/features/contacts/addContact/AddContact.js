import React, {useRef}  from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { getAddContactMode, setAddContactMode, addContact } from './addContactSlice';
import { addContactAction } from './../contactList/contactListSlice';

import './addContact.scss';

export function AddContact(){

  const isAddContactMode = useSelector(getAddContactMode);

  const nameEl = useRef('');
  const phoneEl = useRef('');

  const dispatch = useDispatch();

  return (
    isAddContactMode && (
      <form className="addContact__container">
        <input className='addContact__input' type='text' placeholder='name' ref={nameEl}/>

        <input className='addContact__input addContact__phone' type='text' placeholder='phone' ref={phoneEl}/>

        <input
          className='addContact__input addContact__btn'
          type='submit'
          value = "add"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addContactAction({
              contactName:nameEl.current.value,
              contactPhone:phoneEl.current.value
              }));
            dispatch(setAddContactMode(false));
            }
          }
        />

        <input
          className='addContact__input addContact__btn'
          type='button'
          value = "close"
          onClick={(e) => {
            dispatch(setAddContactMode(false));
            }
          }
        />
      </form>
    )
  )
}