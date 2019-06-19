import React from 'react';
import './App.scss';
import { LoginForm } from './Components'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>Quiz Up</h2>
      </div>
      <div className="main">
        <LoginForm/>
      </div>
    </div>
  );
}

export default App;
