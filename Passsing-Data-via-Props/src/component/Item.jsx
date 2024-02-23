const Item = (props) => {
    return (
        <li key={props.foodIteam} className="list-group-item">
            {props.foodIteam}
        </li>
    );
};
export default Item;
