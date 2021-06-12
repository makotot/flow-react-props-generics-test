// @flow strict

import * as React from 'react';
import './App.css';
import { Foo } from './Foo';

function App(): React.Node {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
          <Foo foo={1} />
        </a>
      </header>
    </div>
  );
}

export default App;
