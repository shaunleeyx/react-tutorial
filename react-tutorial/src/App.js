import SomeContainer from "./component/SomeContainer";
import AnotherContainer from "./component/AnotherContainer";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

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

export default App;
