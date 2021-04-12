import './App.css';
import React, { useState, useEffect } from "react";

import Board from "./components/Board/Board";

function App() {

  const tileDefault = {
    variant: "contained",
    color: "primary",
  }

  const [tileState, setTileState] = useState({
    disabled: false,
    disableElevation: false,
  });

  //array for storing tiles and their data
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
      coord: {x: col, y: row},
      // xCoord: col,
      // yCoord: row,
      mine: false,
      nearby: 0,
      ...tileDefault,
      tileState,
      setTileState,
    });
    if(col < rowLength - 1) {
      col++;
    } else {
      col = 0;
      row++;
    }
  }

  const bombNum = 10;
  const bombIndex = [];

  for(let c = 0; c < bombNum; c++) {
    let index = Math.floor(Math.random() * tileTotal);

    let tile = tiles.find(tile => tile.tIndex === index);

    if(!(tile.mine)) {
      tile.mine = true;
      bombIndex.push(index);
    } else {
      c--;
    }
  }

  tiles.forEach(tile => {
    let currentTile = tile;
    let x = tile.coord.x;
    let y = tile.coord.y;
    
    let nearby = [];
    nearby.push(tiles.find(tile => (tile.coord.x === x - 1 && tile.coord.y === y - 1)));
    nearby.push(tiles.find(tile => (tile.coord.x === x - 1 && tile.coord.y === y)));
    nearby.push(tiles.find(tile => (tile.coord.x === x - 1 && tile.coord.y === y + 1)));
    nearby.push(tiles.find(tile => (tile.coord.x === x && tile.coord.y === y - 1)));
    nearby.push(tiles.find(tile => (tile.coord.x === x && tile.coord.y === y + 1)));
    nearby.push(tiles.find(tile => (tile.coord.x === x + 1 && tile.coord.y === y - 1)));
    nearby.push(tiles.find(tile => (tile.coord.x === x + 1 && tile.coord.y === y)));
    nearby.push(tiles.find(tile => (tile.coord.x === x + 1 && tile.coord.y === y + 1)));

    nearby.forEach(tileCheck => {
      if(tileCheck){
        if(tileCheck.mine) {
          currentTile.nearby++;
        }
      }
    });
    //nearby mines rules
    // (tile.xCoord === x - 1 && tile.yCoord === y - 1)  
    // || (tile.xCoord === x - 1 && tile.yCoord === y)
    // || (tile.xCoord === x - 1 && tile.yCoord === y + 1)
    // || (tile.xCoord === x && tile.yCoord === y - 1)
    // || (tile.xCoord === x && tile.yCoord === y + 1)
    // || (tile.xCoord === x + 1 && tile.yCoord === y - 1)
    // || (tile.xCoord === x + 1 && tile.yCoord === y)
    // || (tile.xCoord === x + 1 && tile.yCoord === y + 1)

    
  });
  

  return (
    <div className="App">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam sequi nisi quod iste! Aspernatur voluptatibus animi, suscipit nulla voluptas eveniet optio labore, molestiae velit voluptatem corrupti incidunt in unde!</p>
      <p>Placeholder stuff for rules, difficulty selector, maybe top ten fastest times</p>


      <Board tiles={tiles} />
    </div>
  );
}

export default App;
