import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import About from './components/about'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          <Main/>
          <About/>
          {/* Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
