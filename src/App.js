import logo from './logo.svg';


import './App.css';
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
