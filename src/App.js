import React from 'react';
import './App.scss';
import { LoginForm, WelcomeCard, QuestionCard } from './Components'
import { HeaderLogo } from './assets'
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <img className="header" src={HeaderLogo}/>
        <div className="main">
          {/* <LoginForm/> */}
          {/* <WelcomeCard/> */}
          <QuestionCard highlight={false} selectedAnswer={"A"} correctAnswer={"A"}/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
