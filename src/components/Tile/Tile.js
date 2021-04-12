import Button from "@material-ui/core/Button";

const Tile = (props) => {
    return (
        <div className="tile">
            <Button 
                variant={props.variant} 
                color={props.mine ? "secondary" : props.color}
                disabled={props.tileState.disabled}
                disableElevation={props.tileState.disableElevation}
                onClick={() => {
                    alert(`click on ${props.x}, ${props.y}`);
                    
                    }
                }
            >{props.mine ? "m" : props.nearby ? `${props.nearby}` : "c"}</Button>
        </div>
    );
}

export default Tile;