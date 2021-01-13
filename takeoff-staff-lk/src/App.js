import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { ContactList } from './features/contacts/contactList/contactList';

import 'normalize.css';
import './App.css';


import {Login} from './features/login/Login.js';

function App() {
  return (
    <div className="App">

      <Login/>
      <ContactList/>

      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
