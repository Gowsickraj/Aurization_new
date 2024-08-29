import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
// import { Sendingdatas } from './Forms/Sendingdatas';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Sendingdatas/> */}
  </React.StrictMode>
);
