import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-1704gteheu5ox6nq.us.auth0.com"
    clientId="w2rskHIoUBnqvoKqXnrkB5pIhu0uVWJa"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <App />
      </React.StrictMode>
  </Auth0Provider>,
)
