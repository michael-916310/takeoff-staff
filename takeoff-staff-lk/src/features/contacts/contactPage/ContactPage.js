import React from 'react';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from './../../login/loginSlice';

import { ContactList } from './../contactList/contactList';
import { AddContact } from './../addContact/AddContact';
import { DeleteContact } from './../deleteContact/DeleteContact';
import { EditContact } from './../editContact/EditContact';

import './contactPage.scss';

export function ContactPage() {

  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn && (
    <article className="contactPage__container">
      <AddContact/>
      <DeleteContact/>
      <EditContact/>
      <ContactList/>
    </article>
  )
}