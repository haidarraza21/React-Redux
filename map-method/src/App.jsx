import 'bootstrap/dist/css/bootstrap.min.css'
function App(){

  let foodItems = ["Almonds", "Brazil nuts", "Lentils", "Oatmeal", "Wheat germ", "Broccoli", "Apple"];
  return <>
  <h1>Healthy Food</h1>
  <ul class="list-group">
    {foodItems.map( item => <li key={item} class="list-group-item">{item}</li>)}
  
</ul>
  </>
}
export default App;