import React from 'react';
import './App.scss';
import MainPage from './Pages/MainPage';
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
        <MainPage/>
    </Provider>
  );
}

export default App;
