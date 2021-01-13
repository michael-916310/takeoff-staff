import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './contactList.scss';

export function ContactList() {
  const list = [
    {
      contactId: 1,
      contactName: 'Иванов Иван Иванович',
      contactPhone: '+7 917 999-88-77'
    },
    {
      contactId: 2,
      contactName: 'Чингачгук Петр Петрович',
      contactPhone: '+7 927 111-22-33'
    }

  ];
  return (
    <table className="contactList-container">
      <tbody>
        <tr>
          <th> Id </th>
          <th> Name </th>
          <th> Phone </th>
          <th> Actions </th>
        </tr>
        {
          list.map((el)=>{
            return (
              <tr key={el.contactId}>
                <td className="contactList-column">
                  {el.contactId}
                </td>
                <td className="contactList-column">
                  {el.contactName}
                </td>
                <td className="contactList-column">
                  {el.contactPhone}
                </td>
                <td>
                  <img className="contactList__icon" src="../edit_icon.png"/>
                  <img className="contactList__icon" src="../delete_icon.png"/>
                </td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}