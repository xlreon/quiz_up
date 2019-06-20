import React from 'react';
import './App.scss';
import MainPage from './Pages/MainPage';
import { HeaderLogo } from './assets'
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <img className="header" src={HeaderLogo}/>
        <MainPage/>
      </div>
    </Provider>
  );
}

export default App;
