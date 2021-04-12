import logo from './logo.svg';


import './App.css';
import React, { useState, useEffect } from "react";

import Board from "./components/Board/Board";
import { grey } from '@material-ui/core/colors';

function App() {

  const tileDefault = {
    variant: "contained",
    color: "grey",
    disabled: false,
    disableElevation: false,
  }


  const tiles = [];

  
  //total number of tiles
  const tileTotal = 100;

  //number of columns per row
  const rowLength = 10;
  
  //fill array of Tiles
  //Tiles have tile index, x coordinate, y coordinate
  let row = 0;
  let col = 0;
  for(let i = 0; i < tileTotal; i++) {
    tiles.push({
      tIndex: i,
      xCoord: col,
      yCoord: row,
    });
    if(col < rowLength - 1) {
      col++;
    } else {
      col = 0;
      row++;
    }
  }

  const [tile, setTile] = useState({
  });


  return (
    <div className="App">
      <Board stuff={tileDefault} tiles={tiles}/>
    </div>
  );
}

export default App;
