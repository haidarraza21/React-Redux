import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import Add from "./Add";
function App(){
  return <React.Fragment>
   
    <center> <h1>Lists of Healthy food </h1></center>
    <h1>Healthy Fruits</h1>
    <ul class="list-group list-group-numbered">
       <li class="list-group-item">Apple</li>
       <li class="list-group-item">Avocados</li>
       <li class="list-group-item">Bananas</li>
       <li class="list-group-item">Oranges</li>
       <li class="list-group-item">Blueberries</li>
    </ul>

    <Add/>
  </React.Fragment>

 

 
}
export default App;