import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='dev-b6nqtl5cxl0okx61.us.auth0.com'
    clientId='WmPa4lqH9a1e1GJHH4iONPr2RInW46eb'
    client_secret='i-tFOY8ICbpyraGeaRvNqnPfw7me5yg579qjngPTeM9dNHisXsYgDWipwxkV3cx8'
    redirectUri={window.location.origin}  
    >
    <App/>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
