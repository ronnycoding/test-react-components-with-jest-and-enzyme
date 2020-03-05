import React from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Testing</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <h1>Welcome to React</h1>
      <ul className="my-list-elements">
        <li>element 1</li>
        <li>element 2</li>
        <li>element 3</li>
      </ul>
      <Test />
    </div>
  );
}

export default App;
