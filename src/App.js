import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import AddNumber from './components/AddNumber';

import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
        <AddNumber/>
      </div>
    </Provider>
  );
}

export default App;
