import React from 'react';
import logo from './logo.svg';
import './App.css';
import cogi from './cogi.jpeg'
import cogi2 from './cogi2.jpg'

import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
        <TodoList/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cogi} alt="cogi"/>
        <img src={cogi2} alt="cogi2"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
