import React, {useState, useEffect}  from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getDeleteContactMode, getDeleteId, setDeleteContactMode} from './deleteContactSlice';
import {getContactList, deleteContactAction} from './../contactList/contactListSlice';

import './deleteContact.scss';

export function DeleteContact(){

  const dispatch = useDispatch();
  const isDeleteContactMode = useSelector(getDeleteContactMode);
  const deleteId = useSelector(getDeleteId);
  const contactList = useSelector(getContactList);

  const [state, setState] = useState({
    contactName: 'contactName',
    contactPhone: 'contactPhone'
  });

  useEffect(()=>{
    const arr = contactList.filter((el)=>{return el.contactId === deleteId});
    if (arr.length === 1) {
      setState({
        contactName: arr[0].contactName,
        contactPhone: arr[0].contactPhone,
      });
    }
  }, [deleteId, contactList]);

  return isDeleteContactMode && deleteId && (
    <form className="deleteContact__container">

      <input
        className='deleteContact__input'
        type='text'
        defaultValue={ state.contactName }
        readOnly
      />

      <input
        className='deleteContact__input deleteContact__phone'
        defaultValue = { state.contactPhone}
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
          dispatch(setDeleteContactMode({mode:false, id:null}));
          }
        }
      />

      <input
        className='deleteContact__input deleteContact__btn'
        type='button'
        value = "close"
        onClick={(e) => {
          dispatch(setDeleteContactMode(false));
          dispatch(setDeleteContactMode({mode:false, id:null}));
          }
        }
      />

  </form>
  )
}

