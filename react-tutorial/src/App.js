import SomeContainer from "./component/SomeContainer";
import AnotherContainer from "./component/AnotherContainer";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import './App.css';
import React from 'react';

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


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
const grid = () => {
  let row = 3
  let col = 3
  let l = []
  let count = 1
  for (let j = 1; j <= row; j++) {
    for (let i = 1; i <= col; i++) {
        l.push(<button className="square">{count}</button>)
        count++;
    }
    l.push(<br/>)
}
  return l
};

function MyButton({count,onClick}) {
  }
  return (
    <button onClick ={handleClick}>
      CLicked {count} times
    </button>
  );
}

function App() {
  const [count,setCount] = React.useState(0);
  return (
    <tbody>
      <tr>
        <MyButton count = {count} onClick={handleClick}/>
        <br/>
        <MyButton count = {count} onClick={handleClick}/>
        <br/>
        {grid()}
        <h1>
          <Profile/>
        </h1>
      </tr>
    </tbody>
  );
}
export default App;
