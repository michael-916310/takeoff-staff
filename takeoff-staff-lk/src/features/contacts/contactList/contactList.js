import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContactData } from './../../../app/utils';

import { setContactList, getContactList } from './contactListSlice';
import { getDeleteId, startDeleteContactAction, stopDeleteContactAction } from './../deleteContact/deleteContactSlice';
import { stopAddContactAction } from './../addContact/addContactSlice';
import { stopEditContactAction, startEditContactAction } from './../editContact/editContactSlice';

import './contactList.scss';

export function ContactList() {

  const dispatch = useDispatch();
  const list = useSelector(getContactList);
  const deleteId = useSelector(getDeleteId);

  useEffect(()=>{
    getContactData().then((data)=>{
      dispatch(setContactList(data));
    })
  }, []);

  console.log(list);

  return (
    <React.Fragment>
      <table className="contactList__container">
        <tbody>
          <tr>
            <th className="contactList__header-column"> Id </th>
            <th className="contactList__header-column"> Name </th>
            <th className="contactList__header-column"> Phone </th>
            <th className="contactList__header-column"> Actions </th>
          </tr>
          { (list.length>0) && (
            list.map((el)=>{
              return (
                <tr key={el.contactId} className="contactList__row">
                  <td className="contactList__column">
                    {el.contactId}
                  </td>
                  <td className="contactList__column">
                    {el.contactName}
                  </td>
                  <td className="contactList__column">
                    {el.contactPhone}
                  </td>
                  <td>
                    <img
                      className="contactList__icon"
                      src="./icons/edit_icon.png"
                      alt="edit"
                      onClick = { ()=>{
                        dispatch(stopAddContactAction());
                        dispatch(stopDeleteContactAction());
                        dispatch(startEditContactAction(el.contactId));
                      }}
                      />
                    <img
                      className="contactList__icon"
                      src="./icons/delete_icon.png"
                      alt="delete"
                      onClick={()=>{
                        dispatch(stopAddContactAction());
                        dispatch(stopEditContactAction());
                        dispatch(startDeleteContactAction(el.contactId));
                      }}/>
                  </td>
              </tr>
              )
            })
          )}
        </tbody>
      </table>
    </React.Fragment>
  )
}