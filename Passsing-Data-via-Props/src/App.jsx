import FoodIteam from "./component/FoodIteam";
import Error from "./component/Error";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let foodIteam = []
  // let foodIteam = ["Oranges", "Blueberries", "Avocados", "Apple", "Banana"];
  return (
    <>
      <h1>Healthy Food</h1>
      <Error item={foodIteam}></Error>
      <FoodIteam item={foodIteam}></FoodIteam>
    </>
  );
}
export default App;
