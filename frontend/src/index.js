import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { store } from './store/reduxStore';
import { Provider as ReduxProvider } from 'react-redux';


//fonts
import './assets/fonts/Web437_IBM_BIOS-2x.woff';
import './assets/fonts/Mx437_IBM_BIOS-2x.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();