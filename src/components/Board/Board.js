import Tile from "../Tile/Tile";

const Board = (props) => {
    return (
        <div className="board">
            {props.tiles.map(tile =>
                <Tile 
                    key={tile.tIndex}
                    i={tile.tIndex} 
                    x={tile.coord.x} 
                    y={tile.coord.y} 
                    variant={tile.variant}
                    color={tile.color}
                    mine={tile.mine}
                    nearby={tile.nearby}
                    disabled={tile.disabled}
                    event={props.event}
                    />
            )}
        </div>
    );
}

export default Board;