import React from 'react';
import reactDom from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './app/Store'

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

