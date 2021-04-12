import Button from "@material-ui/core/Button";

const Tile = (props) => {
    return (
        <div>
            <Button 
                variant={props.stuff.variant} 
                color={props.stuff.color}
            >Tile</Button>
        </div>
    );
}

export default Tile;