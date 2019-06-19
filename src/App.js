import React from 'react';
import './App.scss';
import { LoginForm, WelcomeCard, QuestionCard } from './Components'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>Quiz Up</h2>
      </div>
      <div className="main">
        {/* <LoginForm/> */}
        {/* <WelcomeCard/> */}
        <QuestionCard highlight={true} selectedAnswer={"A"} correctAnswer={"A"}/>
      </div>
    </div>
  );
}

export default App;
