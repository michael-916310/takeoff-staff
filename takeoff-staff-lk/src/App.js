import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import 'normalize.css';
import './App.css';


import {Login} from './features/login/Login.js';

function App() {
  return (
    <div className="App">

      <Login/>

      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
