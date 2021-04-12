import Tile from "../Tile/Tile";

const Board = (props) => {
    return (
        <div className="board">
            {props.tiles.map(tile =>
                <Tile 
                    i={tile.tIndex} 
                    x={tile.xCoord} 
                    y={tile.yCoord} 
                    variant={tile.variant}
                    color={tile.color}
                    mine={tile.mine}
                    nearby={tile.nearby}
                    tileState={tile.tileState}
                    setTileState={tile.setTileState}
                    />
            )}
        </div>
    );
}

export default Board;