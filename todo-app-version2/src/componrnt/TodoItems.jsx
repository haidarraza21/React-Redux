import AddIteam from "./AddIteam"
const TodoItems = ({ items }) => {
    return (
        <div className="todo-item">
            {items.map((item) => <AddIteam todoDate={item.deuDate} todoName={item.name}></AddIteam>)}
        </div>
    );
};
export default TodoItems;
