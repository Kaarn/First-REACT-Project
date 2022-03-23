import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/app';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<App />} />
        </Route>
      </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
