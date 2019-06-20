import React from 'react';
import './App.scss';
import { LoginForm, WelcomeCard, Questions, ResultsCard } from './Components'
import { HeaderLogo } from './assets'
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <img className="header" src={HeaderLogo}/>
        <div className="main">
          <LoginForm/>
          {/* <WelcomeCard/> */}
          {/* <Questions /> */}
          {/* <ResultsCard/> */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
