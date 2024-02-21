import 'bootstrap/dist/css/bootstrap.min.css'
function App(){
  // let foodItem =[];
  let foodItem = ["Apple", "Broccoli", "Wheat germ", "Oatmeal", "Lentils"];

  let emptyMessage = foodItem.length === 0 ? <h3>Im still Hungery!</h3> :null ;
  // // if-else-statements:choose between two blocks of content
  // if(foodItem.length === 0){
  //   return <h3>Im still Hungery!</h3>
  // }


  return <>
  <h1>Healthy Food</h1>

  {emptyMessage}
  <ul class="list-group">
    {foodItem.map (item => <li class="list-group-item">{item}</li>)}
  
</ul>
  </>
}
export default App;