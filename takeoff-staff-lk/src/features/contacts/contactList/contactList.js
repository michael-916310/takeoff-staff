import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContactData } from './../../../app/utils';

import { setContactList, getContactList } from './contactListSlice';

import './contactList.scss';

export function ContactList() {

  const dispatch = useDispatch();
  const list = useSelector(getContactList);

  useEffect(()=>{
    getContactData().then((data)=>{
      dispatch(setContactList(data));
    })
  }, []);

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
          { list.length && (
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
                    <img className="contactList__icon" src="../icons/edit_icon.png" alt="edit"/>
                    <img className="contactList__icon" src="../icons/delete_icon.png" alt="delete"/>
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