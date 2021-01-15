import React from 'react';
import { Counter } from './features/counter/Counter';

import { ContactList } from './features/contacts/contactList/contactList';
import { Header } from './features/header/Header';

import 'normalize.css';
import './App.css';


import {Login} from './features/login/Login.js';

function App() {
  return (
    <div className="App">

      <Header/>
      <Login/>
      <ContactList/>

      {/*
      <header className="App-header">
        <Counter />
      </header>
      */}
    </div>
  );
}

export default App;
