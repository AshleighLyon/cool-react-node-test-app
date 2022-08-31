import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Auth0Provider
    domain="test-pisys.eu.auth0.com"
    clientId="H7CJZjfszFDaQfTObOaF1G7MEDmlFxNS"
    redirectUri={window.location.origin}
    //redirectUri="http://localhost:3000/"
  >
    <App/>
  </Auth0Provider>
);