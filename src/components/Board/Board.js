import Tile from "../Tile/Tile";

const Board = (props) => {
    return (
        <div>
            <Tile stuff={props.stuff}/>
            <Tile stuff={props.stuff}/>
            <Tile stuff={props.stuff}/>
            <Tile stuff={props.stuff}/>
            <Tile stuff={props.stuff}/>
        </div>
    );
}

export default Board;