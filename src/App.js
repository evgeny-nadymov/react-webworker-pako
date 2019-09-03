import React from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import PakoWorker from './pako.worker';
import './App.css';

const worker = new PakoWorker();
worker.onmessage = (event) => {
  console.log('[UI] onmessage', event.data);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();

            const test = { my: 'super', puper: [456, 567], awesome: 'pako' };
            worker.postMessage(test);
            console.log('[UI] postMessage', test);
          }}
        >
          Test Pako webworker (check config-overrides.js for details)
        </a>
      </header>
    </div>
  );
}

export default App;
