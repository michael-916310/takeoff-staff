import React, {useState, useEffect}  from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getDeleteContactMode, getDeleteId, setDeleteContactMode, stopDeleteContactAction} from './deleteContactSlice';
import {getContactList, deleteContactAction} from './../contactList/contactListSlice';

import './deleteContact.scss';

export function DeleteContact(){

  const dispatch = useDispatch();
  const isDeleteContactMode = useSelector(getDeleteContactMode);
  const deleteId = useSelector(getDeleteId);
  const contactList = useSelector(getContactList);

  const [contactInfo, setContactInfo] = useState({
    contactName: 'contactName',
    contactPhone: 'contactPhone'
  });

  useEffect(()=>{
    const arr = contactList.filter((el)=>{return el.contactId === deleteId});
    if (arr.length === 1) {
      const info = {
        contactName: arr[0].contactName,
        contactPhone: arr[0].contactPhone,
      }
      setContactInfo(info);
    }
  }, [deleteId, contactList]);

  return isDeleteContactMode && deleteId && (
    <form className="deleteContact__container">

      <input
        className='deleteContact__input'
        type='text'
        value={ contactInfo.contactName }
        readOnly
      />

      <input
        className='deleteContact__input deleteContact__phone'
        value = { contactInfo.contactPhone}
        readOnly
        type='text'
      />

      <input
        className='deleteContact__input deleteContact__btn'
        type='submit'
        value = "delete"
        onClick={(e) => {
          e.preventDefault();

          dispatch(deleteContactAction(deleteId));
          dispatch(stopDeleteContactAction());
          }
        }
      />

      <input
        className='deleteContact__input deleteContact__btn'
        type='button'
        value = "close"
        onClick={(e) => {
          dispatch(stopDeleteContactAction());
          }
        }
      />

  </form>
  )
}

