import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContactData } from './../../../app/utils';
import { getIsLoggedIn } from './../../login/loginSlice';

import './contactList.scss';

export function ContactList() {

  const isLoggedIn = useSelector(getIsLoggedIn);

  const [list, setList] = useState([]);
  useEffect(()=>{
    getContactData().then((data)=>{
      setList(data);
    })
  }, []);

  return isLoggedIn && (
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
                  <img className="contactList__icon" src="../edit_icon.png" alt="edit"/>
                  <img className="contactList__icon" src="../delete_icon.png" alt="delete"/>
                </td>
            </tr>
            )
          })
        )}
      </tbody>
    </table>
  )
}