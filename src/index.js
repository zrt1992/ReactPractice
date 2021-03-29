import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactClass from './ReactClass'
import reportWebVitals from './reportWebVitals';
import Zulfiqar from "./Zulfiqar";
import ApiCall from "./StateMangment";

ReactDOM.render(
  <React.StrictMode>
    <ApiCall/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
