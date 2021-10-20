import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/app/store';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('App')
  )


