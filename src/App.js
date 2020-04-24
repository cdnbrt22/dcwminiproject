import React from 'react';
import './App.css';
import Router from "./router";
import { Provider } from "react-redux";
import Navbar from './components/Navbar/Navbar';
import Store from './store/store';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Navbar />
        <Router />       
        
      </div>
    </Provider> 
  );
}

export default App;
