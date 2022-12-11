import logo from "./logo.svg";
import React , { Component}  from 'react'
import "./App.css";
import Header from "./components/header";
//import F from './pages/firstPage';
import FirstPage from "./pages/firstPage";
//import { StrictMode } from 'react';

function App() {
  return (
    <div>
      <FirstPage />
    </div>
  );
}

export default App;
