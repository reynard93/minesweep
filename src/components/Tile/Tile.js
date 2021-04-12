import Button from "@material-ui/core/Button";

const Tile = (props) => {
    return (
        <div>
            <Button 
                variant={props.stuff.variant} 
                color={props.stuff.color}
            >{props.x}, {props.y}</Button>
        </div>
    );
}

export default Tile;