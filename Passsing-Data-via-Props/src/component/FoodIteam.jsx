import Item from "./Item";

const FoodIteam = ({ item }) => {

    return (
        <ul className="list-group">
            {item.map((item) => (
                <Item foodIteam={item} ></Item>
            ))}
        </ul>
    );
}
export default FoodIteam;
