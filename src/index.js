import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// cmd for json server
// npx json-server --watch data/db.json --port 8000

// stop react server
// netstat -ano | findstr :3000
// taskkill /F /PID 12345


//install react router dom
// npm install react-router-dom@5