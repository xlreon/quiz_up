import React from 'react';
import './App.scss';
import { LoginForm, WelcomeCard, QuestionCard } from './Components'
import { HeaderLogo } from './assets'

function App() {
  return (
    <div className="container">
      <img className="header" src={HeaderLogo}/>
      <div className="main">
        {/* <LoginForm/> */}
        {/* <WelcomeCard/> */}
        <QuestionCard highlight={false} selectedAnswer={"A"} correctAnswer={"A"}/>
      </div>
    </div>
  );
}

export default App;
