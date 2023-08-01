import SomeContainer from "./component/SomeContainer";
import AnotherContainer from "./component/AnotherContainer";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import React from "react";
import MyButton from "./component/MyButton";
import Board from "./component/Board";

/*
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <AnotherContainer/>
        </Route>
        <Route exact path="/somecontainer">
          <SomeContainer />
        </Route>
      </Switch>

    </div>
  );
}

*/
/*
const board = () => {

  let row = 3
  let col = 3
  let l = []
  let count = 1
  for (let j = 1; j <= row; j++) {
    let r = []
    for (let i = 1; i <= col; i++) {
      r.push(<button
         className="square"
         onClick = {handleClick}
         >
          {count}
          </button>
          )
        count++;
    }
    l.push(<div className="board-row"> {r} </div>)

}
  return l
};
*/
function App() {
  return (
    <tbody>
      <div>
        <Board />
      </div>
    </tbody>
  );
}

export default App;
