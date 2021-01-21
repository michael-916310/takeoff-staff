import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { getEditContactMode, getEditContactId, stopEditContactAction } from './editContactSlice';
import {getContactList, updateContactAction } from './../contactList/contactListSlice';

import './editContact.scss';;

export function EditContact(){

  const dispatch = useDispatch();
  const isEditMode = useSelector(getEditContactMode);
  const editId = useSelector(getEditContactId);
  const contactList = useSelector(getContactList);

  const [contactInfo, setContactInfo] = useState({
    contactName: 'contactName',
    contactPhone: 'contactPhone'
  });

  useEffect(()=>{
    const arr = contactList.filter((el)=>{return el.contactId === editId});
    if (arr.length === 1) {
      const info = {
        contactName: arr[0].contactName,
        contactPhone: arr[0].contactPhone,
      }
      setContactInfo(info);
      setContactInfoToDOM(arr[0].contactName, arr[0].contactPhone);
    }
  }, [editId]);

  const nameEl = useRef('');
  const phoneEl = useRef('');

  function setContactInfoToDOM(n,p){
    nameEl.current.value = n;
    phoneEl.current.value = p;
  }

  return isEditMode && editId && (
    <form className="editContact__container">
    <input
      className='editContact__input'
      type='text'
      placeholder='name'
      ref = {nameEl}
    />

    <input
      className='editContact__input editContact__phone'
      type='text'
      placeholder='phone'
      ref = {phoneEl}
    />

    <input
      className='editContact__input editContact__btn'
      type='submit'
      value = "save"
      onClick={(e) => {
        e.preventDefault();
        dispatch(updateContactAction({
          contactId: editId,
          contactName:nameEl.current.value,
          contactPhone:phoneEl.current.value
        }));

        dispatch(stopEditContactAction());
        }
      }
    />

    <input
      className='editContact__input editContact__btn'
      type='button'
      value = "close"
      onClick={(e) => {
        dispatch(stopEditContactAction());
        }
      }
    />
  </form>
  )
}
