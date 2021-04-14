import Button from "@material-ui/core/Button";

const Tile = (props) => {
    return (
        <div className="tile">
            <Button 
                variant={props.variant} 
                color={props.mine ? "secondary" : props.color}
                disabled={props.disabled}
                onClick={(e) => {
                    e.preventDefault();
                    console.log(e.getModifierState());
                    console.log(e);
                    console.log(props.i);
                    props.event(e, props.i);
                    }
                }
            >{props.mine ? "m" : props.nearby ? `${props.nearby}` : "c"}</Button>
        </div>
    );
}

export default Tile;