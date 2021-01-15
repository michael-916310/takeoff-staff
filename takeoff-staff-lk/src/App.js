import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from './features/header/Header';
import { Login } from './features/login/Login.js';
import { ContactList } from './features/contacts/contactList/contactList';
import { AddContact } from './features/contacts/addContact/AddContact';

import { ContactPage } from './features/contacts/contactPage/ContactPage';

import 'normalize.css';
import './App.css';


function App() {

  return (
    <div className="App">

      <Header/>
      <Login/>
      <ContactPage/>

    </div>
  );
}

export default App;
