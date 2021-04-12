import Tile from "../Tile/Tile";

const Board = (props) => {
    return (
        <div className="board">
            {props.tiles.map(tile =>
                <Tile i={tile.i} x={tile.xCoord} y={tile.yCoord} stuff={props.stuff}/>
            )}
        </div>
    );
}

export default Board;