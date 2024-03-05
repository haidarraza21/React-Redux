import "bootstrap/dist/css/bootstrap.min.css";
import Titel from "./componrnt/Titel";
import AddTodo from "./componrnt/AddTodo";
import TodoItems from "./componrnt/TodoItems";
import "./App.css";


function App() {
  let items = [
    {
      name: "Buy Milk",
      deuDate: "1/24/2024",
    },
    {
      name: "Go to college",
      deuDate: "1/24/2024",
    },
    {
      name: "Ready PPT",
      deuDate: "1/24/2024",
    },
  ];

  return (
    <center>
      <Titel />
      <AddTodo />
      <TodoItems items={items}></TodoItems>
    </center>
  );
}
export default App;
