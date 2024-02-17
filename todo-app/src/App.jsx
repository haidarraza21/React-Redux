import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem2 from "./components/TodoIteam2"
import TodoItem1 from "./components/TodoItem1"
import "./App.css"

function App() {
  return <center class='todo-container'>
    <AppName/>
    
    <div class = "todo-item-container">
    <AddTodo/>
    <TodoItem1/>
    <TodoItem2/>

    </div>
    
    

  </center>
}
export default App
