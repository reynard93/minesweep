import Tile from "../Tile/Tile";

const Board = ({tiles, event}) => {
    return (
        <div className="board">
            {tiles.map(tile =>
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
                    // don't name it event it is not a event, is a handler
                    event={event}
                    />
            )}
        </div>
    );
}

export default Board;