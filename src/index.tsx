import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { Theme } from './theme';
import { PlayersProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Theme>
        <PlayersProvider>
          <App />
        </PlayersProvider>
      </Theme>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
